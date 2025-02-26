uniform float u_size;
uniform vec2 u_resolution;

attribute float a_size; // to give the particle a random size

void main(){
  /* 
    NORMALLY WE WOULD WRITE:
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); 
    OR
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  */ 

  // Final position
  vec4 model_position = modelMatrix * vec4(position, 1.0);
  vec4 view_position = viewMatrix * model_position;
  gl_Position = projectionMatrix * view_position;

  // Final size
  gl_PointSize = u_size * a_size * u_resolution.y; // We use 'y' cz resizing adjusts the FOV which has a vertical orientation
  gl_PointSize *= 1.0 / - view_position.z;
}