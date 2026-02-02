function generatePDF() {
    // تحديد العنصر الذي سيتم تحويله
    const element = document.getElementById('researchContent');
    
    // إخفاء الأزرار مؤقتاً (احتياطاً رغم وجود CSS ignore)
    const controls = document.querySelector('.floating-controls');
    if(controls) controls.style.display = 'none';

    // إعدادات الملف
    const opt = {
        margin:       [10, 10, 10, 10], // هوامش بالمليمتر
        filename:     'مسودة_بحث_منهجية_الصياغة.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // التنفيذ
    html2pdf().set(opt).from(element).save().then(() => {
        // إعادة إظهار الأزرار بعد الانتهاء
        if(controls) controls.style.display = 'flex';
    }).catch(err => {
        console.error("خطأ في التحميل:", err);
        if(controls) controls.style.display = 'flex';
        alert("حدث خطأ أثناء تحميل الملف. يرجى المحاولة مرة أخرى.");
    });
}
