// scripts.js

document.getElementById('generateButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    
    if (textInput.trim() !== "") {
        // استدعاء API لتحويل النص إلى فيديو وتعليق صوتي
        generateAudio(textInput);
        generateVideo(textInput);
    } else {
        alert("يرجى إدخال نص لتوليد الفيديو.");
    }
});

function generateVideo(text) {
    // محاكاة تحويل النص إلى فيديو باستخدام Pexels API أو Storyblocks API
    // في البداية، سنعرض فيديو ثابت كمثال مؤقت
    const videoOutput = document.getElementById('videoOutput');
    
    // فيديو ثابت كمثال (استبدله لاحقًا بمحتوى حقيقي من API مثل Pexels)
    videoOutput.src = "https://www.example.com/sample-video.mp4"; // استبدله بعنوان فيديو حقيقي تم إنشاؤه
}

function generateAudio(text) {
    const audioOutput = document.getElementById('audioOutput');

    // استخدام API لتحويل النص إلى كلام (هنا نستخدم VoiceRSS كمثال)
    const apiKey = "26192662e8914c419ff75a81886445f4";  // استبدل بـ API Key الخاص بك
    const audioUrl = `https://api.voicerss.org/?key=${apiKey}&hl=ar-eg&src=${encodeURIComponent(text)}`;
    
    // تحميل الصوت وتحديد مصدر الصوت
    audioOutput.src = audioUrl;
}