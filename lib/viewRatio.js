/*!
 * viewRatio - v1.0.0
 * https://github.com/howion/viewRatio
 *
 * Copyright (c) 2018 howion
 * Licensed under the MIT license */

var viewRatio = function($conf) {
    // ELEM TO SCALE-ZOOM
    var $elem;

    // NORMALZIE ELEM
    if ($conf.elem instanceof HTMLElement) {
        // DOM
        $elem = $conf.elem;
    } else if ($conf.elem === undefined) {
        $elem = document.body;
    } else {
        // STR THEN
        $elem = document.querySelector($conf.elem);
    }

    // STATUS
    var $isActive = true;

    return {
        disable: function() { $isActive = false; },
        enable:  function() { $isActive = true;  },
        scale:   function() {
            // CHECK STATUS
            if (!$isActive) return;

            // CALCULATE WIN WIDTH
            var $winW = Math.max( document.documentElement.clientWidth, window.innerWidth || 0 );

            // MIN-MAX WIDTH NORMALIZATION BTW UNDEFINED < > RETURNS FALSE
            if ( $conf.minWidth > $winW ) $winW = $conf.minWidth;
            if ( $conf.maxWidth < $winW ) $winW = $conf.maxWidth;

            // NORMALIZE ZOOM RATIO
            if ( $conf.zoomRatio == undefined ) $conf.zoomRatio = 1;

            // SCALE
            $elem.style['transform-origin'] = '0 0';
            $elem.style['zoom'] = $ratio  = ($winW / $conf.width) * $conf.zoomRatio;
            $elem.style['-ms-transform']  = 'scale(' + $ratio + ')';
            $elem.style['-moz-transform'] = 'scale(' + $ratio + ')';
        }
    };
};
