uniform float u_size;
uniform vec2 u_resolution;
uniform float u_progress;

attribute float a_size; // to give the particle a random size
attribute float a_time_multiplier;

#include ../includes/remap.glsl

void main(){
  /* 
    NORMALLY WE WOULD WRITE:
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); 
    OR
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  */ 

  // You can't update attributes, so make an editable copy
  vec3 updated_position = position;

  float progress = u_progress * a_time_multiplier;

  // Exploding
  float exploding_progress = remap(progress, 0.0, 0.1, 0.0, 1.0);
  exploding_progress = clamp(exploding_progress, 0.0, 1.0);
  exploding_progress = 1.0 - pow(1.0 - exploding_progress, 3.0);
  updated_position *= exploding_progress;

  // Falling
  float falling_progress = remap(progress, 0.1, 1.0, 0.0, 1.0);
  falling_progress = clamp(falling_progress, 0.0, 1.0);
  falling_progress = 1.0 - pow(1.0 - falling_progress, 3.0);
  updated_position.y -= falling_progress * 0.2;

  // Scaling
  float scale_up_progress = remap(progress, 0.0, 0.125, 0.0, 1.0);
  float scale_down_progress = remap(progress, 0.125, 1.0, 1.0, 0.0);
  float size_progress = min(scale_up_progress, scale_down_progress);
  size_progress = clamp(size_progress, 0.0, 1.0);

  // Twinkling
  float twinkling_progress = remap(progress, 0.2, 0.8, 0.0, 1.0);
  twinkling_progress = clamp(twinkling_progress, 0.0, 1.0);
  float twinkling_size = sin(progress * 30.0) * 0.5 + 0.5;
  twinkling_size = 1.0 - twinkling_size * twinkling_progress;
  
  // Final position
  vec4 model_position = modelMatrix * vec4(updated_position, 1.0);
  vec4 view_position = viewMatrix * model_position;
  gl_Position = projectionMatrix * view_position;

  // Final size
  // We use 'u_resolution.y' cz resizing adjusts the FOV which has a vertical orientation
  gl_PointSize = u_size * a_size * u_resolution.y * size_progress * twinkling_size; 
  gl_PointSize *= 1.0 / - view_position.z;
}
