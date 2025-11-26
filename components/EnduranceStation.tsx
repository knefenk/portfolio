import React, { useRef, useEffect } from 'react';

const EnduranceStation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const handleResize = () => {
      // Handle High DPI displays (Retina)
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      
      if (rect) {
        width = rect.width;
        height = rect.height;
        
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        
        // CSS size must remain the same
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        ctx.scale(dpr, dpr);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / width) * 2 - 1,
        y: ((e.clientY - rect.top) / height) * 2 - 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Station Parameters
    const numModules = 12;
    // slightly larger radius for impact
    const baseRadius = Math.min(width, height) * 0.3; 
    const moduleWidth = baseRadius * 0.45;
    const moduleHeight = baseRadius * 0.12;
    const moduleDepth = baseRadius * 0.18;
    let rotation = 0;

    interface Point3D { x: number; y: number; z: number; }

    const project = (p: Point3D, center: {x: number, y: number}): {x: number, y: number, z: number} => {
      // Subtle organic movement
      const time = Date.now() * 0.0005;
      
      const targetTiltX = mouseRef.current.y * 0.05 + Math.sin(time) * 0.03; 
      const targetTiltY = mouseRef.current.x * 0.05 + Math.cos(time * 0.8) * 0.03;
      
      // Initial Tilt for composition (The "Endurance" angle)
      const baseTilt = 0.5; 

      // Rotate around X
      let y = p.y * Math.cos(targetTiltX + baseTilt) - p.z * Math.sin(targetTiltX + baseTilt);
      let z = p.y * Math.sin(targetTiltX + baseTilt) + p.z * Math.cos(targetTiltX + baseTilt);
      
      // Rotate around Y
      let x = p.x * Math.cos(targetTiltY) - z * Math.sin(targetTiltY);
      z = p.x * Math.sin(targetTiltY) + z * Math.cos(targetTiltY);

      const fov = 1200;
      const scale = fov / (fov + z);
      
      return {
        x: x * scale + center.x,
        y: y * scale + center.y,
        z: z 
      };
    };

    const drawBox = (center: Point3D, w: number, h: number, d: number, angle: number) => {
       const vertices: Point3D[] = [];
       // Define geometry relative to center
       const corners = [
         {x:-w/2, y:-h/2, z:-d/2}, {x:w/2, y:-h/2, z:-d/2}, {x:w/2, y:h/2, z:-d/2}, {x:-w/2, y:h/2, z:-d/2}, // Front
         {x:-w/2, y:-h/2, z:d/2}, {x:w/2, y:-h/2, z:d/2}, {x:w/2, y:h/2, z:d/2}, {x:-w/2, y:h/2, z:d/2},   // Back
       ];

       for (let c of corners) {
         // Local Rotation (module orientation)
         const rx = c.x * Math.cos(angle) - c.z * Math.sin(angle);
         const rz = c.x * Math.sin(angle) + c.z * Math.cos(angle);
         vertices.push({ x: center.x + rx, y: center.y + c.y, z: center.z + rz });
       }
       return vertices;
    };

    const animate = () => {
      // Clear scaled rect
      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Recalculate radius on frame to handle resizing smoothly
      const radius = Math.min(width, height) * 0.3;

      rotation += 0.001; // Very slow, majestic rotation

      const allFaces: {pts: {x:number, y:number, z:number}[], avgZ: number, fill: string, stroke: string}[] = [];

      for (let i = 0; i < numModules; i++) {
        const angle = (i / numModules) * Math.PI * 2 + rotation;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        const rawVerts = drawBox({x, y: 0, z}, moduleDepth, moduleHeight, moduleWidth, -angle);
        const projVerts = rawVerts.map(v => project(v, {x: centerX, y: centerY}));

        const facesIndices = [
          [0,1,2,3], [4,5,6,7], [0,1,5,4], [2,3,7,6], [0,3,7,4], [1,2,6,5]
        ];

        facesIndices.forEach(indices => {
          const pts = indices.map(idx => projVerts[idx]);
          const avgZ = pts.reduce((sum, p) => sum + p.z, 0) / 4;
          
          // Shading logic: clearer, cleaner, monochromatic
          // Map depth to a narrow range of greys for a "matte" look
          const depth = Math.max(0, Math.min(1, (avgZ + 500) / 1000));
          
          // Base color (Dark Zinc)
          const base = 30 + (1-depth) * 50; 
          const fill = `rgba(${base}, ${base}, ${base + 5}, 0.95)`;
          
          // Edges - very subtle
          const stroke = `rgba(200, 200, 210, 0.1)`;
          
          allFaces.push({ pts, avgZ, fill, stroke });
        });
      }

      // Connecting Ring
      const ringSteps = 64;
      for (let i=0; i<ringSteps; i++) {
         const angle = (i / ringSteps) * Math.PI * 2 + rotation;
         const nextAngle = ((i+1) / ringSteps) * Math.PI * 2 + rotation;
         const rInner = radius * 0.8; 
         
         const p1 = project({x: Math.cos(angle)*rInner, y: 0, z: Math.sin(angle)*rInner}, {x: centerX, y: centerY});
         const p2 = project({x: Math.cos(nextAngle)*rInner, y: 0, z: Math.sin(nextAngle)*rInner}, {x: centerX, y: centerY});
         
         allFaces.push({
           pts: [p1, p2],
           avgZ: (p1.z + p2.z)/2,
           fill: 'transparent',
           stroke: 'rgba(255, 255, 255, 0.15)' 
         });
      }

      // Sort
      allFaces.sort((a, b) => b.avgZ - a.avgZ);

      // Draw
      allFaces.forEach(face => {
        ctx.beginPath();
        if (face.pts.length === 2) {
          ctx.moveTo(face.pts[0].x, face.pts[0].y);
          ctx.lineTo(face.pts[1].x, face.pts[1].y);
          ctx.strokeStyle = face.stroke;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.moveTo(face.pts[0].x, face.pts[0].y);
          for(let i=1; i<face.pts.length; i++) {
            ctx.lineTo(face.pts[i].x, face.pts[i].y);
          }
          ctx.closePath();
          ctx.fillStyle = face.fill;
          ctx.fill();
          ctx.strokeStyle = face.stroke;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default EnduranceStation;