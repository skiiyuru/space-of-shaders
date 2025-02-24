uniform float u_time;
uniform vec3 u_color;

varying vec3 v_position;
varying vec3 v_normal;


void main() {
  // Re-normalize the interpolated normals
  vec3 normal = normalize(v_normal);

  if(!gl_FrontFacing)
      normal *= -1.0;

  float stripes = mod((v_position.y - u_time * 0.02) * 50.0, 1.0);

  stripes = pow(stripes, 3.0);

  vec3 view_direction = normalize(v_position - cameraPosition);

  /* Dot product
    2 vectors in the same direction ⬆️⬆️ = 1
    2 vectors in opposite direction ⬆️⬇️ = - 1
    2 vectors perpendicular = 0
  */

  float fresnel = dot(view_direction, normal) + 1.0;

  // Push the fresnel effect more to the edges
  fresnel = pow(fresnel, 2.0);

  // falloff effect along the edges
  float falloff = smoothstep(0.8, 0.0, fresnel);

  float hologram = stripes * fresnel;
  
  // apply another fresnel effect on top of the first one and make it brighter 
  hologram += fresnel * 1.25;
  hologram *= falloff;



  gl_FragColor = vec4(vec3(u_color), hologram);


  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}