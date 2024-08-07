const transition = {duration: 1, ease: [0.76, 0,  0.24, 1]};

export const opacity =  {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration:0.35}
    },
    closed: {
        opacity: 0,
        transition: {duration:0.35}
    }
}

export const height = {
    initial: {
        height: 0
    },
    enter: {
        height: 'auto',
        transition
    },
    exit: {
        height: 0,
        transition
    }
}
export const height_loader = {
    initial: {
        height: 0
    },
    enter: {
        height: '100%',
        transition: {duration:5}
    },
    exit: {
        height: 1,
        transition
    }
}


export const customOpacity = {
    initial: {
        opacity: 0
    },
    open: (i) => ({
        opacity: 1,
        transition: {...transition, delay: i[0]}
    }),
    closed: (i) => ({
        opacity: 0,
        transition: {...transition, delay: i[0]}
    })
}

export const translate = {
    initial: {
        y: "100%",
        opacity: 0
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: {...transition, delay: i[0]}
    }),

    exit: (i) => ({
        y: "100%",
        opacity: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1]}
    })

}
export const slide_down = {
    initial: {
        y: "-100%",
        opacity: 0
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: {...transition, delay: i[0]}
    }),
}
export const slide_right = {
    initial: {
        x: "-100%",
        opacity: 0
    },
    enter: (i) => ({
        x: 0,
        opacity: 1,
        transition: {...transition, delay: i[0]}
    }),
}
export const slide_left = {
    initial: {
        x: "100%",
        opacity: 0
    },
    enter: (i) => ({
        x: 0,
        opacity: 1,
        transition: {...transition, delay: i[0]}
    }),
}

export const blur = {
    initial: {
        filter: "blur(0px)",
        opacity: 1
    },
    open: {
        filter: "blur(4px)",
        opacity: 0.6,
        transition: {duration: 0.3}
    },
    closed: {
        filter: "blur(0px)",
        opacity: 1,
        transition: {duration: 0.3}
    }
}
export const background = {
    initial: {
        height: 0
    },
    open: {
        height: "100vh",
        transition
    },
    closed: {
        height: 0,
        transition
    }
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

export const loaderOpacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
    exit:{
        opacity: 0,
        transition: {duration: 0.2}  
    }
}
