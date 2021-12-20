pkg load symbolic

syms f(x, y, z)
f = x.*x + y.*sin(y)

%hold on

gf = gradient(f)

iComponent = function_handle (gf(1), 'vars', [x y]); 
jComponent = function_handle (gf(2), 'vars', [x y]); 

## Setup a 2D grid
[X,Y] = meshgrid ([-0.5:0.05:0.5]);

figure
quiver(X, Y, iComponent (X, Y), jComponent (X,Y))
%surf(X, Y, f(X,Y))

%hold off
rotate3d on