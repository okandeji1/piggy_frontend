const breakpoints = ['480px', '576px', '768px', '992px', '1280px', '1600px'];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export default {
    colors: {
        primary: '#536DFE',
        secondary: '#E4F9FF',
        tertiary: '	#F0F1F4',
        success: '#48bb78',
        danger: '#f56565',
        transparent: 'transparent',
        lightPrimary: '#013d79a1',
    },

    breakpoints,
};