/*!
 * viewRatio - v1.1.0
 * https://github.com/howion/viewRatio
 *
 * Copyright (c) 2018 howion
 * Licensed under the MIT license */

var viewRatio = function($conf) {
    // ELEM TO SCALE-ZOOM
    var $elem = document.documentElement;

    // STATUS
    var $isActive = true;

    // PREPEARE CSS
    $elem.style['-moz-transform-origin'] =
    $elem.style['-o-transform-origin'] =
    $elem.style['-webkit-transform-origin'] =
    $elem.style['transform-origin'] = '0 0';

    // SET CSS PROPERTIES TO SCALE SPECIFIC ZOOM RATIO
    function scaleTo($zoomRatio)
    {
        // CALCULATE NEW WIDTH
        $elem.style['width'] = ((1 / $ratio) * 100) + '%';
        $elem.style['height'] = ($elem.scrollHeight * $ratio) + 'px';

        // SCALE IT
        $elem.style['-moz-transform'] =
        $elem.style['-o-transform'] =
        $elem.style['-webkit-transform'] =
        $elem.style['transform'] = 'scale(' + $zoomRatio + ')';
    }

    // CURRENT COMPUTED ZOOM RATIO
    var $ratio;

    return {
        // DISABLE ZOOMING
        disable: function() { $isActive = false; },
        // ENABLE ZOOMING
        enable: function() { $isActive = true; },
        // REMOVE SCALE
        resetScale: function() { scaleTo(1); },
        // SCALE TO SPECIFIC ZOOM VALUE
        scaleTo: scaleTo,
        // SCALE FUNC
        scale: function() {
            // CHECK STATUS
            if (!$isActive) return;

            // CALCULATE WIN WIDTH
            var $winW = Math.max( $elem.clientWidth, window.innerWidth || 0 );

            // MIN-MAX WIDTH NORMALIZATION BTW UNDEFINED < > RETURNS FALSE
            if ( $conf.minWidth > $winW ) $winW = $conf.minWidth;
            if ( $conf.maxWidth < $winW ) $winW = $conf.maxWidth;

            // NORMALIZE ZOOM RATIO
            if ( $conf.zoomRatio == undefined ) $conf.zoomRatio = 1;

            // COMPUTE NEW RATIO
            $ratio = ($winW / $conf.width) * $conf.zoomRatio;

            // AND FINAL TOUCHS
            scaleTo($ratio);
        }
    };
};
