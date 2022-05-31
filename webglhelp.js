function createProgramFromScripts(context,vertexshaderid,fragmentshaderid) {
    //var vertexcode = document.getElementById(vertexshaderid).nodeValue;
    //var fragmentcode = document.getElementById(fragmentshaderid).nodeValue;

    var vertex =  context.createShader(context.VERTEX_SHADER);
    var fragment = context.createShader(context.FRAGMENT_SHADER);

    context.shaderSource(vertex,vertexshaderid);
    context.compileShader(vertex);
    context.shaderSource(fragment,fragmentshaderid);
    context.compileShader(fragment);

    if ( !gl.getShaderParameter(vertex, gl.COMPILE_STATUS) ) {
        let info = gl.getShaderInfoLog( vertex );
        throw "Could not compile WebGL program. \n\n" + info;
    }
    if ( !gl.getShaderParameter(fragment, gl.COMPILE_STATUS) ) {
        let info = gl.getShaderInfoLog( fragment );
        throw "Could not compile WebGL program. \n\n" + info;
    }

    var program = context.createProgram();
    context.attachShader(program,vertex);
    context.attachShader(program,fragment);
    context.linkProgram(program);
    if ( !gl.getProgramParameter( program, gl.LINK_STATUS) ) {
        var info = gl.getProgramInfoLog(program);
        throw 'WebGL program 不能编译. \n\n' + info;
    }
    return program;
}