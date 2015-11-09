window.onload = function() {
    var canvas = document.getElementById('webgl-demo'),
        gl;

    function initWebGL(canvas) {
        try {
            gl = canvas.getContext('experimental-webgl');
            console.log(gl);
        } catch (e) {
            var msg = 'Error creating WebGL Context!:' + e.toString();
            alert(msg);
            throw Error(msg);
        }
    }

    function initViewport(gl, canvas) {
        gl.viewport(0, 0, canvas.width, canvas.height);

    }

    function createSquare(gl) {
        var vertexBuffer;
        vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        var verts = [
            .5, .5, 0.0, -.5, .5, 0.0,
            .5, -.5, 0.0, -.5, -.5, 0.0
        ];

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);

        var square = {
            buffer: vertexBuffer,
            vertSize: 3,
            nVerts: 4,
            primtype: gl.TRIANGLE_STRIP
        };

        return square;
    }

    initWebGL(canvas);
    initViewport(gl, canvas);
}