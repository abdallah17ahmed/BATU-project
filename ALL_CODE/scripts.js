// دالة لفتح المودال
function openModal(eventName) {
    const modal = document.getElementById("registerModal");
    modal.style.display = "block";
    
    // معالجة الفورم
    document.getElementById("registerForm").onsubmit = function(e) {
      e.preventDefault(); // منع إعادة تحميل الصفحة
      alert("You have successfully registered for: " + eventName);
      closeModal(); // إغلاق المودال بعد الإرسال
    };
  }
  
  // دالة لإغلاق المودال
  function closeModal() {
    const modal = document.getElementById("registerModal");
    modal.style.display = "none";
  }
// ///////////////////////////////////////////////////////////////////////
                                           // side_par
// جلب العناصر
const menuBar = document.querySelector('.home_page_menu_bar');  // الأيقونة لفتح الـ Sidebar
const sidebar = document.querySelector('.home_page_sidebar');  // الـ Sidebar نفسه
const body = document.querySelector('body');  // الجسم (كل الصفحة)

// إظهار/إخفاء الـ Sidebar عند النقر على الأيقونة
menuBar.addEventListener('click', (event) => {
    event.stopPropagation();  // لمنع الحدث من الانتقال إلى الجسم وبالتالي إغلاق الـ Sidebar
    sidebar.classList.toggle('active');  // التبديل بين إظهار وإخفاء الـ Sidebar
});

// إخفاء الـ Sidebar عند النقر في أي مكان خارج الـ Sidebar
body.addEventListener('click', (event) => {
    // تحقق إذا كان العنصر الذي تم النقر عليه ليس الـ Sidebar أو الأيقونة
    if (!sidebar.contains(event.target) && !menuBar.contains(event.target)) {
        sidebar.classList.remove('active');  // إخفاء الـ Sidebar
    }
});

// منع النقر داخل الـ Sidebar من إغلاقه
sidebar.addEventListener('click', (event) => {
    event.stopPropagation();  // لمنع النقر داخل الـ Sidebar من تفعيل الـ "body" event
});
// //////////////////////////////////////////////////////////////////////////////////////////////////////
                                              // log_out
function confirmLogout() {
  var confirmation = confirm("Do you want to log out?");
  if (confirmation) {
      window.close(); 
  }
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////
                                              // home_page

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Function to update slider position
function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to show next slide
function showNextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
}

// Function to show previous slide
function showPrevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSliderPosition();
}

// Add event listeners for buttons
prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Auto-slide every 5 seconds
setInterval(showNextSlide, 5000);

let header = document.querySelector('.home_page_header');
let sticky = header.offsetTop;  // المسافة التي يقع عندها الهيدر من الأعلى

window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');  // أضف الكلاس لتثبيت الهيدر
    } else {
        header.classList.remove('sticky');  // إزالة الكلاس عند الرجوع للأعلى
    }
};
