import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'


export default defineConfig({
    // ...UnoCSS options
    theme: {
        colors: {
            light: {
                primary: '#2563EBFF',
                success: '#16A34AFF',
                warning: '#F97316FF',
                error: '#E11D48FF',
                stress: '#0B0B0BDE',
                holder: '#71717AFF',
                muted: '#A0A4AAFF',
                screen: '#FFFFFFFF',
                wrapper: '#FEFEFEFF',
                inner: '#EFEFEFFF'
            },
            dark: {
                primary: '#2563EBFF',
                success: '#16A34AFF',
                warning: '#F97316FF',
                error: '#E11D48FF',
                stress: '#FAFAFAFF',
                holder: '#E0E0E0FF',
                muted: '#6C6E72FF',
                screen: '#000000FF',
                wrapper: '#18181BFF',
                inner: '#272727FF'
            },
        }
    },
    shortcuts: [
        {
            'text-primary': 'text-light-primary dark:text-dark-primary',
            'text-success': 'text-light-success dark:text-dark-success',
            'text-warning': 'text-light-warning dark:text-dark-warning',
            'text-error': 'text-light-error dark:text-dark-error',
            'text-stress': 'text-light-stress dark:text-dark-stress',
            'text-holder': 'text-light-holder dark:text-dark-holder',
            'text-muted': 'text-light-muted dark:text-dark-muted',
            'text-catch':'text-9 line-height-10 text-stress font-bold'
        },
        {
            'bg-primary': 'bg-light-primary dark:bg-dark-primary',
            'bg-success': 'bg-light-success dark:bg-dark-success',
            'bg-warning': 'bg-light-warning dark:bg-dark-warning',
            'bg-error': 'bg-light-error dark:bg-dark-error',
            'bg-screen': 'bg-light-screen dark:bg-dark-screen',
            'bg-wrapper': 'bg-light-wrapper dark:bg-dark-wrapper',
            'bg-inner': 'bg-light-inner dark:bg-dark-inner',
        },
        {
            'shadow': 'shadow-light dark:shadow-dark',
        },
        {
            'btn-silence': '!bg-inner !transition-none text-stress'
        }
    ],
    rules: [
        // @ts-ignore
        [/^line-(\d+)$/, ([, l]) => {
            if (~~l === 1) {
                return {
                    'overflow': 'hidden',
                    'text-overflow': 'ellipsis',
                    'white-space': 'nowrap',
                    'width': '100%',
                }
            }
            return {
                'overflow': 'hidden',
                'display': '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': l,
            }
        }],
        [/^shadow-light$/, () => ({
            'box-shadow': '0 0 #0000,0 0 #0000,0px 0px 15px 0px rgba(0,0,0,.03),0px 2px 30px 0px rgba(0,0,0,.08),0px 0px 1px 0px rgba(0,0,0,.3)'
        })],
        [/^shadow-dark$/, () => ({
            'box-shadow': '0 0 #0000,0 0 #0000,0px 0px 15px 0px rgba(0, 0, 0, .06), 0px 2px 30px 0px rgba(0, 0, 0, .22), inset 0px 0px 1px 0px hsla(0, 0%, 100%, .15)'
        })],
    ],
    presets: [
        presetUno(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetTypography(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})