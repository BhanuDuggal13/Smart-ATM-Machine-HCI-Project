import { SupportedLanguages, Translations } from '../types/language';

// English translations as default
const en: Translations = {
  // General
  welcomeToSmartATM: 'Welcome to Smart ATM',
  welcomeMessage: 'Your advanced banking solution with voice assistance and multi-currency support',
  insertCardPrompt: 'Insert your card or tap to continue',
  smartATMFooter: 'Smart ATM Technology. All rights reserved.',
  
  // Language and theme
  changeLanguage: 'Change language',
  switchToLightMode: 'Switch to light mode',
  switchToDarkMode: 'Switch to dark mode',
  
  // PIN
  enterPIN: 'Please enter your PIN',
  incorrectPIN: 'Incorrect PIN. Please try again.',
  useKeypadBelow: 'Use the keypad below to enter your PIN',
  
  // Main menu
  selectTransaction: 'Select a transaction',
  accountBalance: 'Account Balance',
  withdraw: 'Withdraw',
  deposit: 'Deposit',
  transactionHistory: 'Transaction History',
  checkBalance: 'Check Balance',
  sellGold: 'Sell Gold',
  exit: 'Exit',
  
  // Withdrawal
  selectAmount: 'Select amount',
  selectCurrency: 'Select currency',
  other: 'Other',
  
  // Deposit
  enterAmount: 'Enter amount',
  confirmDeposit: 'Confirm Deposit',
  depositInstructions: 'Please insert cash into the deposit slot when prompted',
  depositNote: 'Note: Deposited funds may take up to 24 hours to appear in your account',
  
  // Gold selling
  goldWeight: 'Gold Weight',
  checkGold: 'Check Gold',
  checkingGold: 'Checking gold...',
  goldVerified: 'Gold Verified',
  purity: 'Purity',
  weight: 'Weight',
  currentRate: 'Current Rate',
  estimatedValue: 'Estimated Value',
  confirmGoldSale: 'Confirm Gold Sale',
  goldSellingInstructions: 'Insert gold into the designated slot for purity verification',
  
  // Transaction complete
  transactionComplete: 'Transaction Complete',
  transactionDetails: 'Transaction Details',
  type: 'Type',
  amount: 'Amount',
  date: 'Date',
  time: 'Time',
  reference: 'Reference',
  backToMainMenu: 'Back to Main Menu',
  automaticRedirect: 'You will be redirected to the main menu in 5 seconds',
  
  // Voice assistant
  startListening: 'Start Voice Assistant',
  stopListening: 'Stop Voice Assistant',
  mute: 'Mute',
  unmute: 'Unmute',
  
  // Keypad
  enter: 'Enter'
};

// Spanish translations
const es: Translations = {
  // General
  welcomeToSmartATM: 'Bienvenido al Cajero Inteligente',
  welcomeMessage: 'Su solución bancaria avanzada con asistencia de voz y soporte multimoneda',
  insertCardPrompt: 'Inserte su tarjeta o toque para continuar',
  smartATMFooter: 'Tecnología de Cajero Inteligente. Todos los derechos reservados.',
  
  // Language and theme
  changeLanguage: 'Cambiar idioma',
  switchToLightMode: 'Cambiar a modo claro',
  switchToDarkMode: 'Cambiar a modo oscuro',
  
  // PIN
  enterPIN: 'Por favor, ingrese su PIN',
  incorrectPIN: 'PIN incorrecto. Inténtelo de nuevo.',
  useKeypadBelow: 'Use el teclado de abajo para ingresar su PIN',
  
  // Main menu
  selectTransaction: 'Seleccione una transacción',
  accountBalance: 'Saldo de la Cuenta',
  withdraw: 'Retirar',
  deposit: 'Depositar',
  transactionHistory: 'Historial de Transacciones',
  checkBalance: 'Consultar Saldo',
  sellGold: 'Vender Oro',
  exit: 'Salir',
  
  // Withdrawal
  selectAmount: 'Seleccionar cantidad',
  selectCurrency: 'Seleccionar moneda',
  other: 'Otro',
  
  // Deposit
  enterAmount: 'Ingresar cantidad',
  confirmDeposit: 'Confirmar Depósito',
  depositInstructions: 'Por favor, inserte efectivo en la ranura de depósito cuando se le indique',
  depositNote: 'Nota: Los fondos depositados pueden tardar hasta 24 horas en aparecer en su cuenta',
  
  // Gold selling
  goldWeight: 'Peso del Oro',
  checkGold: 'Verificar Oro',
  checkingGold: 'Verificando oro...',
  goldVerified: 'Oro Verificado',
  purity: 'Pureza',
  weight: 'Peso',
  currentRate: 'Tasa Actual',
  estimatedValue: 'Valor Estimado',
  confirmGoldSale: 'Confirmar Venta de Oro',
  goldSellingInstructions: 'Inserte el oro en la ranura designada para verificación de pureza',
  
  // Transaction complete
  transactionComplete: 'Transacción Completada',
  transactionDetails: 'Detalles de la Transacción',
  type: 'Tipo',
  amount: 'Cantidad',
  date: 'Fecha',
  time: 'Hora',
  reference: 'Referencia',
  backToMainMenu: 'Volver al Menú Principal',
  automaticRedirect: 'Será redirigido al menú principal en 5 segundos',
  
  // Voice assistant
  startListening: 'Iniciar Asistente de Voz',
  stopListening: 'Detener Asistente de Voz',
  mute: 'Silenciar',
  unmute: 'Activar Sonido',
  
  // Keypad
  enter: 'Entrar'
};

// French translations
const fr: Translations = {
  // General
  welcomeToSmartATM: 'Bienvenue au Guichet Automatique Intelligent',
  welcomeMessage: 'Votre solution bancaire avancée avec assistance vocale et prise en charge multidevise',
  insertCardPrompt: 'Insérez votre carte ou appuyez pour continuer',
  smartATMFooter: 'Technologie de Guichet Automatique Intelligent. Tous droits réservés.',
  
  // Language and theme
  changeLanguage: 'Changer de langue',
  switchToLightMode: 'Passer au mode clair',
  switchToDarkMode: 'Passer au mode sombre',
  
  // PIN
  enterPIN: 'Veuillez entrer votre code PIN',
  incorrectPIN: 'Code PIN incorrect. Veuillez réessayer.',
  useKeypadBelow: 'Utilisez le clavier ci-dessous pour entrer votre code PIN',
  
  // Main menu
  selectTransaction: 'Sélectionnez une transaction',
  accountBalance: 'Solde du Compte',
  withdraw: 'Retirer',
  deposit: 'Déposer',
  transactionHistory: 'Historique des Transactions',
  checkBalance: 'Vérifier le Solde',
  sellGold: 'Vendre de l\'Or',
  exit: 'Quitter',
  
  // Withdrawal
  selectAmount: 'Sélectionner le montant',
  selectCurrency: 'Sélectionner la devise',
  other: 'Autre',
  
  // Deposit
  enterAmount: 'Entrer le montant',
  confirmDeposit: 'Confirmer le Dépôt',
  depositInstructions: 'Veuillez insérer l\'argent dans la fente de dépôt lorsque vous y êtes invité',
  depositNote: 'Remarque : Les fonds déposés peuvent prendre jusqu\'à 24 heures pour apparaître sur votre compte',
  
  // Gold selling
  goldWeight: 'Poids de l\'Or',
  checkGold: 'Vérifier l\'Or',
  checkingGold: 'Vérification de l\'or...',
  goldVerified: 'Or Vérifié',
  purity: 'Pureté',
  weight: 'Poids',
  currentRate: 'Taux Actuel',
  estimatedValue: 'Valeur Estimée',
  confirmGoldSale: 'Confirmer la Vente d\'Or',
  goldSellingInstructions: 'Insérez l\'or dans la fente désignée pour la vérification de la pureté',
  
  // Transaction complete
  transactionComplete: 'Transaction Terminée',
  transactionDetails: 'Détails de la Transaction',
  type: 'Type',
  amount: 'Montant',
  date: 'Date',
  time: 'Heure',
  reference: 'Référence',
  backToMainMenu: 'Retour au Menu Principal',
  automaticRedirect: 'Vous serez redirigé vers le menu principal dans 5 secondes',
  
  // Voice assistant
  startListening: 'Démarrer l\'Assistant Vocal',
  stopListening: 'Arrêter l\'Assistant Vocal',
  mute: 'Couper le Son',
  unmute: 'Activer le Son',
  
  // Keypad
  enter: 'Entrer'
};

// Chinese translations
const zh: Translations = {
  // General
  welcomeToSmartATM: '欢迎使用智能ATM',
  welcomeMessage: '您的先进银行解决方案，具有语音辅助和多币种支持',
  insertCardPrompt: '插入您的卡或点击继续',
  smartATMFooter: '智能ATM技术。保留所有权利。',
  
  // Language and theme
  changeLanguage: '更改语言',
  switchToLightMode: '切换到浅色模式',
  switchToDarkMode: '切换到深色模式',
  
  // PIN
  enterPIN: '请输入您的密码',
  incorrectPIN: '密码错误。请重试。',
  useKeypadBelow: '使用下方键盘输入您的密码',
  
  // Main menu
  selectTransaction: '选择交易',
  accountBalance: '账户余额',
  withdraw: '取款',
  deposit: '存款',
  transactionHistory: '交易历史',
  checkBalance: '查询余额',
  sellGold: '出售黄金',
  exit: '退出',
  
  // Withdrawal
  selectAmount: '选择金额',
  selectCurrency: '选择货币',
  other: '其他',
  
  // Deposit
  enterAmount: '输入金额',
  confirmDeposit: '确认存款',
  depositInstructions: '请在提示时将现金插入存款槽',
  depositNote: '注意：存入的资金可能需要最多24小时才能显示在您的账户中',
  
  // Gold selling
  goldWeight: '黄金重量',
  checkGold: '检查黄金',
  checkingGold: '检查黄金中...',
  goldVerified: '黄金已验证',
  purity: '纯度',
  weight: '重量',
  currentRate: '当前汇率',
  estimatedValue: '估计价值',
  confirmGoldSale: '确认黄金出售',
  goldSellingInstructions: '将黄金插入指定槽口进行纯度验证',
  
  // Transaction complete
  transactionComplete: '交易完成',
  transactionDetails: '交易详情',
  type: '类型',
  amount: '金额',
  date: '日期',
  time: '时间',
  reference: '参考号',
  backToMainMenu: '返回主菜单',
  automaticRedirect: '您将在5秒内被重定向到主菜单',
  
  // Voice assistant
  startListening: '启动语音助手',
  stopListening: '停止语音助手',
  mute: '静音',
  unmute: '取消静音',
  
  // Keypad
  enter: '确认'
};

// Arabic translations
const ar: Translations = {
  // General
  welcomeToSmartATM: 'مرحبًا بك في الصراف الآلي الذكي',
  welcomeMessage: 'حل الخدمات المصرفية المتقدم مع المساعدة الصوتية ودعم العملات المتعددة',
  insertCardPrompt: 'أدخل بطاقتك أو انقر للمتابعة',
  smartATMFooter: 'تقنية الصراف الآلي الذكي. جميع الحقوق محفوظة.',
  
  // Language and theme
  changeLanguage: 'تغيير اللغة',
  switchToLightMode: 'التبديل إلى الوضع النهاري',
  switchToDarkMode: 'التبديل إلى الوضع الليلي',
  
  // PIN
  enterPIN: 'الرجاء إدخال رقم التعريف الشخصي',
  incorrectPIN: 'رقم التعريف الشخصي غير صحيح. حاول مرة أخرى.',
  useKeypadBelow: 'استخدم لوحة المفاتيح أدناه لإدخال رقم التعريف الشخصي',
  
  // Main menu
  selectTransaction: 'اختر معاملة',
  accountBalance: 'رصيد الحساب',
  withdraw: 'سحب',
  deposit: 'إيداع',
  transactionHistory: 'سجل المعاملات',
  checkBalance: 'التحقق من الرصيد',
  sellGold: 'بيع الذهب',
  exit: 'خروج',
  
  // Withdrawal
  selectAmount: 'اختر المبلغ',
  selectCurrency: 'اختر العملة',
  other: 'أخرى',
  
  // Deposit
  enterAmount: 'أدخل المبلغ',
  confirmDeposit: 'تأكيد الإيداع',
  depositInstructions: 'يرجى إدخال النقود في فتحة الإيداع عند المطالبة',
  depositNote: 'ملاحظة: قد يستغرق ظهور الأموال المودعة في حسابك ما يصل إلى 24 ساعة',
  
  // Gold selling
  goldWeight: 'وزن الذهب',
  checkGold: 'فحص الذهب',
  checkingGold: 'جاري فحص الذهب...',
  goldVerified: 'تم التحقق من الذهب',
  purity: 'النقاء',
  weight: 'الوزن',
  currentRate: 'السعر الحالي',
  estimatedValue: 'القيمة التقديرية',
  confirmGoldSale: 'تأكيد بيع الذهب',
  goldSellingInstructions: 'أدخل الذهب في الفتحة المخصصة للتحقق من النقاء',
  
  // Transaction complete
  transactionComplete: 'اكتملت المعاملة',
  transactionDetails: 'تفاصيل المعاملة',
  type: 'النوع',
  amount: 'المبلغ',
  date: 'التاريخ',
  time: 'الوقت',
  reference: 'المرجع',
  backToMainMenu: 'العودة إلى القائمة الرئيسية',
  automaticRedirect: 'سيتم إعادة توجيهك إلى القائمة الرئيسية في 5 ثوانٍ',
  
  // Voice assistant
  startListening: 'بدء المساعد الصوتي',
  stopListening: 'إيقاف المساعد الصوتي',
  mute: 'كتم الصوت',
  unmute: 'إلغاء كتم الصوت',
  
  // Keypad
  enter: 'إدخال'
};

const translations: Record<SupportedLanguages, Translations> = {
  en,
  es,
  fr,
  zh,
  ar
};

export default translations;