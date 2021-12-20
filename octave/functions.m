clc;
%clf;
%clear;

#f = @(x) sin(x) .* x; # .* for element-wise operations
f = @(x) sin(x) * x; # if you don't use .* then you have to use "arrayfun" later

min = 1;
max = 100;
numItems = (max - min) + 1;
%y =linspace(min, max, numItems);
y = 1:100;

%fy = f(y)
fy = arrayfun(f,y)
