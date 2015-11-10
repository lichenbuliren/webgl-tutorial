window.onload = function(){
    var renderer = null,
        scene = null,
        camera = null,
        cube = null,
        animating = false;

    function init(){
        var container = document.querySelector('.container'),
            CON_WIDTH = container.offsetWidth,
            CON_HEIGHT = container.offsetHeight;

        // 创建Three.js场景
        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(CON_WIDTH,CON_HEIGHT);
        container.appendChild(renderer.domElement);

        // 创建 Three.js 场景
        scene = new THREE.Scene();

        // 创建相机，并添加到场景中
        camera = new THREE.PerspectiveCamera(45, CON_WIDTH/CON_HEIGHT,1,4000);
        camera.position.set(0,0,3);

        // 创建一个平行光光源照射到物体上
        var light = new THREE.DirectionalLight(0xffffff,1.5);
        light.position.set(0,0,1);
        scene.add(light);

        // 创建一个接收光照并带有纹理映射的立方体，并添加到场景中
        var mapUrl = '../images/golfpanda.png';
        var map = THREE.ImageUtils.loadTexture(mapUrl);

        // 然后创建一个 Phong 材质来处理着色，并传递给纹理
        var material = new THREE.MeshPhongMaterial({map:map});

        // 创建立方体
        var geometry = new THREE.CubeGeometry(1,1,1);

        // 将几何体和材质放到一个网格中
        cube = new THREE.Mesh(geometry,material);

        // 设置网格在场景中的朝向，否则将开不到立方体的形状
        cube.rotation.x = Math.PI / 5;
        cube.rotation.y = Math.PI / 5;

        // 将立方体添加到场景中
        scene.add(cube);

        bindEvent();

        run();
    }

    function bindEvent(){
        var dom = renderer.domElement;
        dom.addEventListener('mouseup',function(e){
            e.preventDefault();
            animating = !animating;
        },false);
    }

    function run(){
        // 渲染场景
        renderer.render(scene,camera);

        // 在下一帧中旋转立方体
        if(animating){
            cube.rotation.y -= 0.01;
        }

        requestAnimationFrame(run);
    }

    init();
}