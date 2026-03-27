import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // العناوين والقائمة
        Home: "Home",
        Contact: "Contact",
        About: "About",
        Shop: "Shop",
        Exclusive: "Exclusive",
        Login: "Login",
        Signup: "Sign Up",
        Logout: "Logout",
        Profile: "Profile",
        
        // السلة والدفع
        Cart: "Shopping Cart",
        Checkout: "Checkout",
        Orders: "My Orders",
        Price: "Price",
        Total: "Total Amount",
        Subtotal: "Subtotal",
        Shipping: "Shipping",
        Free: "Free",
        AddToCart: "Add to Cart",
        RemoveFromCart: "Remove",
        EmptyCart: "Your cart is empty",
        BackToStore: "Back to Store",
        ClearCart: "Clear Shopping Cart",
        OrderSummary: "Order Summary",
        ProceedToCheckout: "Proceed to Checkout",
        
        // الحساب والتسجيل
        CreateAnAccount: "Create an account",
        Enteryourdetailsbelow: "Enter your details below",
        UserName: "User Name",
        email: "Email",
        password: "Password",
        phoneNumber: "Phone Number",
        fullName: "Full Name",
        CreateAccount: "Create Account",
        HaveAccount: "Already have an account?",
        LogInToYourAccount: "Login to your account",
        DontHaveAccount: "Don't have an account?",
        
        // كلمات البحث والأقسام
        Products: "Products",
        Categories: "Categories",
        Search: "Search...",
        SearchProducts: "Search Products",
        SearchPlaceholder: "What are you looking for?",
        
        // الرسائل والحالات
        Success: "Success!",
        Error: "An error occurred",
        errorOcured: "Something went wrong, please try again",
        Ok: "Ok",
        Save: "Save",
        Verify: "Verify",
        ConfirmEmail: "Your account has been created. Please confirm your email",
        
        // استعادة كلمة المرور
        ForgetPassword: "Forgot Password?",
        ResetPassword: "Reset Password",
        ResetPasswordSubtitle: "Enter your email and we'll send you a reset code",
        SendCode: "Send Code",
        EnterCode: "Enter Code",
        EnterCodeSubtitle: "Enter the code we sent to your email",
        Code: "Code",
        NewPassword: "New Password",
        ConfirmPassword: "Confirm Password",
        ChangePassword: "Change Password",
        PasswordChanged: "Your password has been changed successfully",
        PaymentMethod: "Payment Method",
Visa: "Visa Card",
Cash: "Cash on Delivery",
PayNow: "Pay Now",
OrderSummary: "Order Summary",
ProductName: "Product Name",
TotalCount: "Quantity",
ShippingInformation: "Shipping Information",
FullName: "Full Name",
Phone: "Phone Number",
City: "City",
Address: "Detailed Address",
FieldRequired: "This field is required",
Processing: "Processing...",
OrderCreatedSuccessfully:"Order Created Successfully"
      },
    },
    ar: {
      translation: {
      
        Home: "الرئيسية",
        Contact: "اتصل بنا",
        About: "من نحن",
        Shop: "المتجر",
        Exclusive: "حصري",
        Login: "تسجيل الدخول",
        Signup: "إنشاء حساب",
        Logout: "تسجيل الخروج",
        Profile: "الملف الشخصي",
        
        // السلة والدفع
        Cart: "سلة التسوق",
        Checkout: "إتمام الشراء",
        Orders: "طلباتي",
        Price: "السعر",
        Total: "الإجمالي",
        Subtotal: "المجموع الفرعي",
        Shipping: "الشحن",
        Free: "مجاني",
        AddToCart: "أضف إلى السلة",
        RemoveFromCart: "إزالة",
        EmptyCart: "سلة المشتريات فارغة",
        BackToStore: "العودة للمتجر",
        ClearCart: "مسح السلة بالكامل",
        OrderSummary: "ملخص الطلب",
        ProceedToCheckout: "الانتقال للدفع",

        // الحساب والتسجيل
        CreateAnAccount: "قم بإنشاء حسابك",
        Enteryourdetailsbelow: "أدخل التفاصيل الخاصة بك أدناه",
        UserName: "اسم المستخدم",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        phoneNumber: "رقم الهاتف",
        fullName: "الاسم الكامل",
        CreateAccount: "أنشئ حسابك",
        HaveAccount: "لديك حساب بالفعل؟",
        LogInToYourAccount: "سجل دخول إلى حسابك",
        DontHaveAccount: "ليس لديك حساب؟",
        
        // كلمات البحث والأقسام
        Products: "المنتجات",
        Categories: "الأقسام",
        Search: "بحث...",
        SearchProducts: "البحث عن المنتجات",
        SearchPlaceholder: "ما الذي تبحث عنه؟",
        
        // الرسائل والحالات
        Success: "تم بنجاح!",
        Error: "حدث خطأ ما",
        errorOcured: "حدث خطأ، يرجى المحاولة مرة أخرى",
        Ok: "حسناً",
        Save: "حفظ",
        Verify: "تحقق",
        ConfirmEmail: "تم إنشاء حسابك. يرجى تأكيد بريدك الإلكتروني",

        // استعادة كلمة المرور
        ForgetPassword: "نسيت كلمة السر؟",
        ResetPassword: "إعادة تعيين كلمة المرور",
        ResetPasswordSubtitle: "أدخل بريدك الإلكتروني وسنرسل لك رمز إعادة التعيين",
        SendCode: "إرسال الرمز",
        EnterCode: "أدخل الرمز",
        EnterCodeSubtitle: "أدخل الرمز الذي أرسلناه إلى بريدك الإلكتروني",
        Code: "الرمز",
        NewPassword: "كلمة المرور الجديدة",
        ConfirmPassword: "تأكيد كلمة المرور",
        ChangePassword: "تغيير كلمة المرور",
        PasswordChanged: "تم تغيير كلمة المرور بنجاح",
        PaymentMethod: "طريقة الدفع",
Visa: "بطاقة فيزا",
Cash: "دفع نقداً عند الاستلام",
PayNow: "ادفع الآن",
OrderSummary: "ملخص الطلب",
ProductName: "اسم المنتج",
TotalCount: "الكمية",ShippingInformation: "معلومات الشحن",
FullName: "الاسم الكامل",
Phone: "رقم الهاتف",
City: "المدينة",
Address: "العنوان بالتفصيل",
FieldRequired: "هذا الحقل مطلوب",
Processing: "جاري المعالجة...",
OrderCreatedSuccessfully:"تم انشاء طلبك بنجاح"
      },
    },
  },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;