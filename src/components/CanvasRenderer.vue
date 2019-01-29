<template>
  <div id="canvas" />
</template>

<script>
import * as Three from 'three';
import OrbitControls from 'three-orbitcontrols';

export default {
  name: 'CanvasRenderer',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      mesh: null
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init: function() {
      let canvas = document.getElementById('canvas');
      this.camera = new Three.PerspectiveCamera(
        70,
        canvas.clientWidth / canvas.clientHeight,
        0.01,
        10
      );
      this.camera.position.set(0, -2, 2);
      this.scene = new Three.Scene();
      const geometry = new Three.TorusGeometry(1, 0.3, 16, 100);
      const material = new Three.MeshBasicMaterial({ color: 0x34e2b1 });
      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);
      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      canvas.appendChild(this.renderer.domElement);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 1.0;
      this.controls.enableZoom = true;
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>

<style scoped>
#canvas {
  cursor: crosshair;
  width: 100%;
  height: 100%;
}
</style>
