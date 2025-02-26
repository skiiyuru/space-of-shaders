uniform sampler2D u_texture;
uniform vec3 u_color;

void main(){
  
  // Since the texture is grayscale, we only need one channel
  float texture_alpha= texture(u_texture, gl_PointCoord).r;

  gl_FragColor = vec4(u_color, texture_alpha);


  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}