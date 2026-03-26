import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
 
    resources: {
      en: {
        translation: {
    
          Home: "Home",
          Contact: "Contact",
          About: "About",
          Shop: "Shop",
          Exclusive:"Exclusive",
        
          Login: "Login",
          Signup: "Sign Up",
          Logout: "Logout",
          Profile: "Profile",

     
          Products: "Products",
          Categories: "Categories",
          Cart: "Cart",
          Checkout: "Checkout",
          Orders: "My Orders",
          Search: "Search...",
          Price: "Price",
          AddToCart: "Add to Cart",
          RemoveFromCart: "Remove",
          Total: "Total",
          EmptyCart: "Your cart is empty",
          
       
          Success: "Success!",
          Error: "An error occurred",
          Save: "Save",
          SearchProducts: "Search Products",
SearchPlaceholder: "What are you looking for?",
        }
      },
      ar: {
        translation: {
      
          Home: "الرئيسية",
          Contact: "اتصل بنا",
          About: "من نحن",
          Shop: "المتجر",
          Exclusive:"حصري",
    
          Login: "تسجيل الدخول",
          Signup: "إنشاء حساب",
          Logout: "تسجيل الخروج",
          Profile: "الملف الشخصي",

 
          Products: "المنتجات",
          Categories: "الأقسام",
          Cart: "السلة",
          Checkout: "الدفع",
          Orders: "طلباتي",
          Search: "بحث...",
          Price: "السعر",
          AddToCart: "أضف إلى السلة",
          RemoveFromCart: "إزالة",
          Total: "المجموع",
          EmptyCart: "سلة المشتريات فارغة",
          
       
          Success: "تم بنجاح!",
          Error: "حدث خطأ ما",
          Save: "حفظ",
          SearchProducts: "البحث عن المنتجات",
SearchPlaceholder: "ما الذي تبحث عنه؟",
        }
      }
    },
    lng: i18n.language, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;