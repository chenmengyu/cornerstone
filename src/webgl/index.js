import { vertexShader } from './vertexShader';
import { render, initRenderer, getRenderCanvas, isWebGLAvailable, isWebGLInitialized} from './renderer';
import { createProgramFromString } from './createProgramFromString';

import { textureCache } from './textureCache';

const webGL = {};

webGL.createProgramFromString = createProgramFromString;

webGL.renderer = {
    render: render,
    initRenderer: initRenderer,
    getRenderCanvas: getRenderCanvas,
    isWebGLAvailable: isWebGLAvailable
};

webGL.textureCache = textureCache;

webGL.isWebGLInitialized = isWebGLInitialized;

export { webGL };