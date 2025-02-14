import React, { useEffect } from 'react';
import anime from 'animejs';
const PingPong = () => {
    useEffect(() => {
        var loop = true;
        var easing = 'linear';
        var direction = 'alternate';

        // anime({
        //     targets: '.ball',
        //     translateX: 550,
        //     translateY: 100,
        //     easing,
        //     loop,
        //     direction,
        //     background: [
        //         { value: '#573796' },
        //         { value: '#FB89FB' },
        //         { value: '#FBF38C' },
        //         { value: '#18FF92' },
        //         { value: '#5A87FF' }
        //     ]
        // })
        var ballTimeline = anime.timeline({
            loop,
            direction
        })
        var bar2Timeline = anime.timeline({
            loop,
            direction
        })
        var bar1Timeline = anime.timeline({
            loop,
            direction
        })
        // ballTimeline
        //     .add({
        //         targets: '.ball',
        //         translateY: 100,
        //         translateX: 550,
        //         easing
        //     }).add({
        //         targets: '.ball',
        //         translateY: 0,
        //         translateX: 0,
        //         easing
        //     }).add({
        //         targets: '.ball',
        //         translateY: 100,
        //         translateX: 470,
        //         easing
        //     })
        // bar2Timeline
        //     .add({
        //         targets: '.bar2',
        //         translateY: 150,
        //         easing,
        //         background: '#573796'
        //     }).add({
        //         targets: '.bar2',
        //         translateY: 100,
        //         easing,
        //         background: '#FB89FB'
        //     }).add({
        //         targets: '.bar2',
        //         translateY: 50,
        //         easing,
        //         background: '#FBF38C'
        //     })
        bar1Timeline
            .add({
                targets: '.bar1',
                translateY: '-40',
                easing,
                background: '#18FF92'
            }).add({
                targets: '.bar1',
                translateY: 5,
                easing,
                background: '#5A87FF'
            }).add({
                targets: '.bar1',
                translateY: 400,
                easing,
                background: '#FF1461'
            })
    });
    return (
        <div className=".pingpong-container"
            style={{
                height:'50vh'
            }}
        >
            <div className="bar bar1"></div>
            <div className="ball"></div>
            <div className="bar bar2"></div>
        </div>
    );
}

export default PingPong;