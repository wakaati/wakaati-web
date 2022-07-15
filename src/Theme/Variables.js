export const Colors={
    lightpurple: '#D054DC',
    purple: '#B219C1',
    white: '#fff',
    black: '#000',
    grey: '#737070',
    lightgrey: `#DCD8D8`,
    offwhite: '#E5E5E5',
    overlay: '#F4F5F7',
    error: 'red',
    buttons: {
        primary: {
            background: '#B219C1',
            color:  '#fff',
            disabled: 'rgba(158, 36, 197, 0.35)'
          },

          secondary: {
            background: '#0000',
            color:  '#fff',
            disabled: 'rgba(0, 0, 0, 0.5)'
          },

          transparent: {
            background: 'rgba(243, 182, 160, 0.29)',
            color:  '#000',
            disabled: 'rgba(158, 36, 197, 0.35)'
          },

          gradient:{
            background:'linear-gradient(90deg, #B219C1 42.14%, rgba(82, 10, 94, 1) 102.5%)', 
            color:  '#fff',
            disabled: 'rgba(158, 36, 197, 0.35)'
          }
    },

    inputs: {
        placeholder:  '#737070',
        textInput: {
          background: '#F3F3F3',
        },
        pin: {
          background: 'rgba(196, 196, 196, 0.33)',
          border: 'rgba(196, 196, 196, 0.33)',
          foreColor: 'black',
          focus: '#227eff',
          error: '#FE5F55'
        },
        outline: {
            background: '#fff',
            border: 'rgba(196, 196, 196, 0.33)',
            color: '737070'
        }
      },

};

export const FontSize = {
    small:   10,
    normal2: 13,
    normal1: 12,
    header2: 24,
    header3: 18,
    header4: 21
  };

export const NavigationColors = {
    primary: Colors.primary,
  };

  export default {
    Colors,
    NavigationColors,
    FontSize,
  };