import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      light: '#9bb5ff',
      dark: '#3f51b5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#764ba2',
      light: '#a478d2',
      dark: '#4a2373',
      contrastText: '#ffffff',
    },
    background: {
      default: 'transparent', // Let your gradient show through
      paper: 'rgba(255, 255, 255, 0.95)',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: "'Work Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#ffffff',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    // Custom Tab styling
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "'Work Sans', sans-serif",
          fontWeight: 600,
          fontSize: '0.95rem',
          color: '#6b7280',
          borderRadius: '8px',
          margin: '0',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: '#e5e7eb',
            color: '#374151',
          },
          '&.Mui-selected': {
            backgroundColor: '#1976d2',
            color: 'white',
            boxShadow: '0 2px 4px rgba(25, 118, 210, 0.3)',
            '&:hover': {
              backgroundColor: '#1565c0',
              boxShadow: '0 4px 8px rgba(25, 118, 210, 0.4)',
            },
          },
        },
      },
    },
    // Custom Tabs container
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
          padding: '6px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(10px)',
          maxWidth: '400px',
          width: '100%',
        },
        indicator: {
          display: 'none',
        },
      },
    },
    // Button styling
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
          },
        },
      },
    },
    // TextField styling
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#667eea',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#667eea',
            },
          },
        },
      },
    },
    // Paper component styling
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.1)',
    '0 4px 8px rgba(0,0,0,0.12)',
    '0 8px 16px rgba(0,0,0,0.14)',
    '0 12px 24px rgba(0,0,0,0.16)',
    // ... add more as needed
  ],
});

export default theme;



// import { createTheme, alpha } from '@mui/material/styles';

// // Premium color palette
// const colors = {
//   primary: {
//     50: '#f0f4ff',
//     100: '#e0e9ff', 
//     500: '#6366f1', // Indigo - professional & modern
//     600: '#4f46e5',
//     700: '#4338ca',
//     900: '#312e81',
//   },
//   secondary: {
//     50: '#fdf4ff',
//     100: '#fae8ff',
//     500: '#a855f7', // Purple - creative & premium
//     600: '#9333ea',
//     700: '#7c3aed',
//     900: '#581c87',
//   },
//   neutral: {
//     0: '#ffffff',
//     50: '#f8fafc',
//     100: '#f1f5f9',
//     200: '#e2e8f0',
//     300: '#cbd5e1',
//     400: '#94a3b8',
//     500: '#64748b',
//     600: '#475569',
//     700: '#334155',
//     800: '#1e293b',
//     900: '#0f172a',
//     950: '#020617',
//   }
// };

// // Base theme configuration
// const baseTheme = {
//   typography: {
//     fontFamily: '"Inter", "SF Pro Display", system-ui, -apple-system, sans-serif',
//     h1: {
//       fontSize: 'clamp(2rem, 4vw, 3rem)',
//       fontWeight: 700,
//       lineHeight: 1.2,
//       letterSpacing: '-0.025em',
//     },
//     h2: {
//       fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
//       fontWeight: 600,
//       lineHeight: 1.3,
//       letterSpacing: '-0.02em',
//     },
//     h3: {
//       fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
//       fontWeight: 600,
//       lineHeight: 1.4,
//     },
//     h4: {
//       fontSize: '1.25rem',
//       fontWeight: 600,
//       lineHeight: 1.4,
//     },
//     body1: {
//       fontSize: '1rem',
//       lineHeight: 1.6,
//     },
//     body2: {
//       fontSize: '0.875rem',
//       lineHeight: 1.5,
//     },
//     button: {
//       fontSize: '0.875rem',
//       fontWeight: 600,
//       textTransform: 'none',
//       letterSpacing: '0.01em',
//     },
//   },
  
//   shape: {
//     borderRadius: 12,
//   },
  
//   shadows: [
//     'none',
//     '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
//     '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
//     '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
//     '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
//     '0 25px 50px -12px rgb(0 0 0 / 0.25)',
//   ],
  
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 640,
//       md: 768,
//       lg: 1024,
//       xl: 1280,
//     },
//   },
// };

// // Light Theme
// export const lightTheme = createTheme({
//   ...baseTheme,
//   palette: {
//     mode: 'light',
//     primary: {
//       main: colors.primary[500],
//       light: colors.primary[100],
//       dark: colors.primary[700],
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: colors.secondary[500],
//       light: colors.secondary[100],
//       dark: colors.secondary[700],
//       contrastText: '#ffffff',
//     },
//     background: {
//       default: colors.neutral[50],
//       paper: colors.neutral[0],
//     },
//     text: {
//       primary: colors.neutral[900],
//       secondary: colors.neutral[600],
//     },
//     divider: colors.neutral[200],
//     grey: colors.neutral,
//   },
  
//   components: {
//     // Global styles
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           backgroundColor: colors.neutral[50],
//           fontFamily: '"Inter", system-ui, sans-serif',
//           '-webkit-font-smoothing': 'antialiased',
//         },
//         '*': {
//           scrollbarWidth: 'thin',
//           scrollbarColor: `${colors.neutral[300]} transparent`,
//         },
//         '*::-webkit-scrollbar': {
//           width: '6px',
//         },
//         '*::-webkit-scrollbar-track': {
//           background: 'transparent',
//         },
//         '*::-webkit-scrollbar-thumb': {
//           backgroundColor: colors.neutral[300],
//           borderRadius: '3px',
//         },
//       },
//     },
    
//     // Button - Premium glass effect
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 10,
//           padding: '10px 24px',
//           fontWeight: 600,
//           textTransform: 'none',
//           boxShadow: 'none',
//           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//           '&:hover': {
//             transform: 'translateY(-1px)',
//             boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.25)',
//           },
//         },
//         contained: {
//           background: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.primary[600]} 100%)`,
//           '&:hover': {
//             background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.primary[700]} 100%)`,
//           },
//         },
//         outlined: {
//           borderWidth: '1.5px',
//           borderColor: colors.neutral[300],
//           '&:hover': {
//             borderWidth: '1.5px',
//             backgroundColor: alpha(colors.primary[500], 0.04),
//             borderColor: colors.primary[300],
//           },
//         },
//       },
//     },
    
//     // Card - Glass morphism effect
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: 16,
//           backgroundColor: alpha(colors.neutral[0], 0.8),
//           backdropFilter: 'blur(20px)',
//           border: `1px solid ${alpha(colors.neutral[200], 0.3)}`,
//           boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
//           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//           '&:hover': {
//             transform: 'translateY(-4px)',
//             boxShadow: '0 20px 40px 0 rgba(31, 38, 135, 0.15)',
//           },
//         },
//       },
//     },
    
//     // Paper - Clean elevated look
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundColor: colors.neutral[0],
//           backgroundImage: 'none',
//         },
//         elevation1: {
//           boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
//         },
//         elevation2: {
//           boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
//         },
//       },
//     },
    
//     // TextField - Modern input styling
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 10,
//             backgroundColor: colors.neutral[0],
//             '& fieldset': {
//               borderColor: colors.neutral[200],
//               borderWidth: '1.5px',
//             },
//             '&:hover fieldset': {
//               borderColor: colors.neutral[300],
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: colors.primary[500],
//               borderWidth: '2px',
//             },
//           },
//         },
//       },
//     },
    
//     // AppBar - Clean header
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: alpha(colors.neutral[0], 0.8),
//           backdropFilter: 'blur(20px)',
//           boxShadow: `0 1px 0 0 ${colors.neutral[200]}`,
//           color: colors.neutral[900],
//         },
//       },
//     },
    
//     // Tabs - Modern navigation
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//           fontWeight: 600,
//           fontSize: '0.875rem',
//           color: colors.neutral[600],
//           '&.Mui-selected': {
//             color: colors.primary[600],
//           },
//         },
//       },
//     },
    
//     MuiTabs: {
//       styleOverrides: {
//         indicator: {
//           height: 3,
//           borderRadius: '3px 3px 0 0',
//           background: `linear-gradient(90deg, ${colors.primary[500]}, ${colors.secondary[500]})`,
//         },
//       },
//     },
    
//     // Chip - Subtle and clean
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           fontWeight: 500,
//         },
//         filled: {
//           backgroundColor: colors.neutral[100],
//           color: colors.neutral[700],
//         },
//       },
//     },
//   },
// });

// // Dark Theme
// export const darkTheme = createTheme({
//   ...baseTheme,
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: colors.primary[500],
//       light: colors.primary[300],
//       dark: colors.primary[700],
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: colors.secondary[500],
//       light: colors.secondary[300],
//       dark: colors.secondary[700],
//       contrastText: '#ffffff',
//     },
//     background: {
//       default: colors.neutral[950],
//       paper: colors.neutral[900],
//     },
//     text: {
//       primary: colors.neutral[50],
//       secondary: colors.neutral[400],
//     },
//     divider: colors.neutral[800],
//     grey: colors.neutral,
//   },
  
//   components: {
//     // Global styles for dark mode
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           backgroundColor: colors.neutral[950],
//           fontFamily: '"Inter", system-ui, sans-serif',
//           '-webkit-font-smoothing': 'antialiased',
//         },
//         '*': {
//           scrollbarWidth: 'thin',
//           scrollbarColor: `${colors.neutral[700]} transparent`,
//         },
//         '*::-webkit-scrollbar-thumb': {
//           backgroundColor: colors.neutral[700],
//         },
//       },
//     },
    
//     // Button - Dark mode premium styling
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 10,
//           padding: '10px 24px',
//           fontWeight: 600,
//           textTransform: 'none',
//           boxShadow: 'none',
//           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//           '&:hover': {
//             transform: 'translateY(-1px)',
//             boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
//           },
//         },
//         contained: {
//           background: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.primary[600]} 100%)`,
//           '&:hover': {
//             background: `linear-gradient(135deg, ${colors.primary[400]} 0%, ${colors.primary[500]} 100%)`,
//           },
//         },
//         outlined: {
//           borderWidth: '1.5px',
//           borderColor: colors.neutral[700],
//           color: colors.neutral[300],
//           '&:hover': {
//             borderWidth: '1.5px',
//             backgroundColor: alpha(colors.primary[500], 0.1),
//             borderColor: colors.primary[600],
//           },
//         },
//       },
//     },
    
//     // Card - Dark glass morphism
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: 16,
//           backgroundColor: alpha(colors.neutral[900], 0.8),
//           backdropFilter: 'blur(20px)',
//           border: `1px solid ${alpha(colors.neutral[700], 0.3)}`,
//           boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
//           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//           '&:hover': {
//             transform: 'translateY(-4px)',
//             boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.4)',
//             border: `1px solid ${alpha(colors.primary[500], 0.3)}`,
//           },
//         },
//       },
//     },
    
//     // Paper - Dark elevated look
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundColor: colors.neutral[900],
//           backgroundImage: 'none',
//         },
//         elevation1: {
//           boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.3)',
//         },
//         elevation2: {
//           boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.3)',
//         },
//       },
//     },
    
//     // TextField - Dark mode inputs
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 10,
//             backgroundColor: colors.neutral[800],
//             '& fieldset': {
//               borderColor: colors.neutral[700],
//               borderWidth: '1.5px',
//             },
//             '&:hover fieldset': {
//               borderColor: colors.neutral[600],
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: colors.primary[500],
//               borderWidth: '2px',
//             },
//           },
//           '& .MuiInputLabel-root': {
//             color: colors.neutral[400],
//           },
//           '& .MuiOutlinedInput-input': {
//             color: colors.neutral[100],
//           },
//         },
//       },
//     },
    
//     // AppBar - Dark header
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: alpha(colors.neutral[900], 0.8),
//           backdropFilter: 'blur(20px)',
//           boxShadow: `0 1px 0 0 ${colors.neutral[800]}`,
//           color: colors.neutral[100],
//         },
//       },
//     },
    
//     // Tabs - Dark navigation
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//           fontWeight: 600,
//           fontSize: '0.875rem',
//           color: colors.neutral[400],
//           '&.Mui-selected': {
//             color: colors.primary[400],
//           },
//         },
//       },
//     },
    
//     MuiTabs: {
//       styleOverrides: {
//         indicator: {
//           height: 3,
//           borderRadius: '3px 3px 0 0',
//           background: `linear-gradient(90deg, ${colors.primary[400]}, ${colors.secondary[400]})`,
//         },
//       },
//     },
    
//     // Chip - Dark mode chips
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           fontWeight: 500,
//         },
//         filled: {
//           backgroundColor: colors.neutral[800],
//           color: colors.neutral[300],
//         },
//       },
//     },
//   },
// });

// // Theme provider hook for easy switching
// export const useThemeMode = () => {
//   const [darkMode, setDarkMode] = React.useState(
//     () => window.matchMedia('(prefers-color-scheme: dark)').matches
//   );
  
//   const toggleTheme = () => setDarkMode(!darkMode);
  
//   return {
//     theme: darkMode ? darkTheme : lightTheme,
//     darkMode,
//     toggleTheme,
//   };
// };

// // Export default light theme
// export default lightTheme;