clf;
clear;
 
 #colormap ("default");
 
 startx = 100;
 starty = 100;
 width = 1200;
 height = 800;
 figure(1, 'position',[startx,starty,width,height]);
 
 [x, y, z] = peaks (25);
 surf (x, y, z);
 
 hold on;
 
 [u, v, w] = surfnorm (x, y, z / 10);
 h = quiver3 (x, y, z, u, v, w);
 set (h, "maxheadsize", 0.2);
 
 %[u2, v2, w2] = gradient (x, y, z);
 surf (u2, v2, w2);
 
 hold off;
 
 %shading interp;
 title ("quiver3 of surface normals to peaks() function");
 
 rotate3d on
