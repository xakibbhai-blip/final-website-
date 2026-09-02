এই প্যাকেজে যা যা আছে (নতুন GitHub রিপোর জন্য ফুল সেটআপ)
============================================================
index.html
css/style.css
js/main.js
admin/config.yml
admin/index.html
content/settings.json        (স্টার্টার — নাম "SAKIB" বসানো আছে)
content/categories.json      (খালি — Admin panel থেকে যোগ করবে)
content/portfolio.json       (খালি)
content/bestwork.json        (খালি)
content/pricing.json         (খালি)
content/whyhire.json         (খালি)
images/uploads/profile-placeholder.svg
favicon.svg

কীভাবে GitHub এ বসাবে
========================
১. নতুন রিপো বানাও (Public/Private যেকোনোটা)।
২. এই zip এর সব ফাইল ও ফোল্ডার এক্সট্র্যাক্ট করে, রিপোর "Add file →
   Upload files" পেজে সবগুলো একসাথে drag করে দাও।
৩. একটাই commit message দিয়ে একবারে "Commit changes" চাপো —
   এতে একটাই Netlify deploy ট্রিগার হবে (বারবার আলাদা commit
   করলে প্রতিবার নতুন deploy হবে ও build credit বেশি খরচ হবে)।
৪. Netlify তে গিয়ে এই রিপো connect করো, Site settings এ
   Identity + Git Gateway enable করো (Decap CMS Admin Panel
   কাজ করার জন্য এটা লাগবেই)।
৫. netlify.app সাবডোমেইন পাওয়ার পর, index.html এর মধ্যে থাকা
   "YOUR-DOMAIN-HERE" (৩ জায়গায়, meta og/twitter ট্যাগে) বদলে
   আসল ডোমেইন বসাও, তারপর আবার একবার commit করো।

ডিপ্লয়ের পর যা করবে (Admin panel থেকে, /admin এ গিয়ে)
==========================================================
□ Settings > Name (English) এ "SAKIB" ঠিক আছে কিনা চেক করো
  (ইতিমধ্যে বসানো আছে, লাগলে বদলাও)
□ Phone, Email, WhatsApp Number, Location বসাও
□ Navbar Logo এবং (চাইলে আলাদা) Loading Screen Logo আপলোড করো
□ Profile Photo আপলোড করো (এখন placeholder ছবি বসানো আছে)
□ Categories যোগ করো (যেমন: Logo Design, Banner, Social Media)
□ Portfolio কাজ (Category ID মিলিয়ে, cover + gallery ছবি সহ) যোগ করো
□ Pricing প্যাকেজ, Best Work ছবি, Why Hire Me রিজন/স্কিলস যোগ করো
□ ছবি আপলোডের সময় একসাথে ২-৩টার বেশি না দিয়ে ব্যাচে ব্যাচে দিয়ো,
  Compressed (৫০০KB এর নিচে) ছবি দিলে ভালো হয়

যা নতুন/বদলানো হয়েছে (আগের আলোচনা অনুযায়ী)
==============================================
১. মোবাইল রেসপন্সিভ ফিক্স — হ্যামবার্গার মেনু, কোনো এলিমেন্ট
   ওভারল্যাপ করবে না।
২. থিম কালার — Teal + Orange, দুই-কালার সিস্টেম। Hero সেকশনে
   হালকা জ্যামিতিক ব্যাকগ্রাউন্ড প্যাটার্ন।
৩. Admin Panel এ Navbar Logo ও Loading Screen Logo আলাদা ফিল্ড —
   একটা বদলালে আরেকটায় প্রভাব পড়বে না।
৪. পোর্টফোলিও কার্ডে ক্লিক করলে পুরো গ্যালারি Prev/Next arrow ও
   কাউন্টার (যেমন 2/5) দিয়ে ব্রাউজ করা যাবে। কীবোর্ড Left/Right
   Arrow ও কাজ করবে।
৫. পেজ টাইটেল ও লিংক প্রিভিউতে "SAKIB" (ব্র্যান্ড নাম লোগোতেই আছে
   বলে ছোট নাম ব্যবহার করা হয়েছে)।

খেয়াল রাখবে
==============
- favicon-32.png, favicon-16.png, apple-touch-icon.png এই তিনটা
  PNG ফাইল এই প্যাকেজে নেই (টুলের অভাবে বানানো যায়নি)। favicon.svg
  থাকায় আধুনিক ব্রাউজারে আইকন ঠিকই দেখাবে, তবে চাইলে যেকোনো ফ্রি
  online favicon generator দিয়ে বানিয়ে root এ বসিয়ে দিতে পারো।
