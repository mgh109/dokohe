# قرارداد بک‌اند مستقل

فرانت به Laravel یا CodeIgniter وابستگی کدی ندارد؛ فقط REST JSON. مقادیر قیمت عدد صحیح تومان و شناسه‌ها رشته هستند.

## اتصال فعلی

`GET /api/v1/courses`:

```json
{
  "data": [
    {
      "id": "1",
      "slug": "course-1",
      "title": "عنوان دوره",
      "description": "معرفی دوره",
      "category": "communication",
      "teacher": "نام مدرس",
      "price": 500000,
      "rating": 4.6,
      "students": 236,
      "image": "/assets/course-cover.png",
      "lessons": 8,
      "duration": "۴ ساعت"
    }
  ]
}
```

`category`: `communication`، `culture` یا `skills`. `originalPrice` اختیاری است. پاسخ نامعتبر رد می‌شود. تصاویر فعلاً مسیر محلی دارند؛ قبل از اتصال تصاویر CDN، allowlist دامنه و schema تصویر را صریحاً به‌روزرسانی کنید.

## قرارداد پیشنهادی مرحله بعد؛ هنوز در فرانت متصل نشده

| قابلیت          | مسیر پیشنهادی                       | الزام سمت PHP                                           |
| --------------- | ----------------------------------- | ------------------------------------------------------- |
| درخواست کد ورود | POST /auth/otp/request              | اعتبارسنجی موبایل، rate limit و جلوگیری از enumeration  |
| تأیید کد        | POST /auth/otp/verify               | انقضا، محدودیت تلاش و نشست امن                          |
| حساب کاربر      | GET /me                             | کنترل نشست                                              |
| مقالات          | GET /articles و GET /articles/:slug | پاسخ ساختاریافته؛ HTML تنها پس از sanitization          |
| پیام تماس       | POST /contact                       | validation، rate limit و CSRF در صورت استفاده از cookie |
| پرداخت          | POST /checkout                      | دریافت slug/ID؛ محاسبه مجدد قیمت در سرور                |
| محتوای درس      | GET /courses/:slug/lessons/:id      | کنترل ثبت‌نام و signed media URL                        |
| آزمون و گواهی   | مسیرهای مستقل ارزیابی               | ارزیابی و صدور کامل سمت سرور                            |

برای نشست cookie از `HttpOnly`, `Secure` و `SameSite` مناسب استفاده شود؛ برای تغییرات، CSRF سمت سرور ضروری است. اگر frontend و PHP روی دامنه‌های متفاوت باشند، CORS فقط برای origin مشخص و با credential policy روشن تنظیم شود. نقش‌ها و مجوزها را از ورودی فرانت نپذیرید.

در یک deployment می‌توان `/api/*` را در reverse proxy به PHP و سایر مسیرها را به Next.js هدایت کرد. پنل مدیریت در پروژه PHP مستقل می‌ماند.
