const theme = {
  fontSizes: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  typography: {
    h1: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      lineHeight: 1.4,
    },
    body: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    small: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  colors: {
    primary: '#3B9856',         // 진한 초록 (보조 포인트)
    primaryLight: '#F29E48',
    primarySuperLight: '#E5F2E7',
    secondaryLight: '#9DCB88',    // 밝은 초록 (아이콘, 포인트)
    broccoli: '#7EB77F',          // 캐릭터 보조용
    background: '#F0F0F0',        // 전체 배경톤
    white: '#FFFFFF',
    text: '#333333',
    textLight: '#666666',
    state: {
      disabled: '#C0C0C0',
      error: '#E74C3C',
      success: '#2ECC71',
      warning: '#F1C40F',
    },
  }
};

export default theme;
