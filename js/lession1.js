window.onload = function() {
    // 抓取作为Canvas容器的div标签
    var demo = document.getElementById('webgl-demo');

    // 创建 Three.js 渲染器，并添加到div标签中
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(demo.offsetWidth, demo.offsetHeight);
    demo.appendChild(renderer.domElement);

    // 创建 Three.js 场景
    var scene = new THREE.Scene();

    // 创建相机，并添加到场景中
    var camera = new THREE.PerspectiveCamera(45, demo.offsetWidth / demo.offsetHeight, 1, 4000);
    camera.position.set(0, 0, 3.3333);
    scene.add(camera);

    // 创建一个矩形几何体，并添加到场景中
    var geometry = new THREE.PlaneGeometry(1, 1);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial());

    scene.add(mesh);

    // 渲染绘制
    renderer.render(scene, camera);
}