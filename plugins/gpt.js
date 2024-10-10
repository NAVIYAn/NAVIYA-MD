const { cmd } = require('../command');

cmd({
    pattern: "gpt",
    desc: "ChatGPT සමඟ කතා කරන්න",
    category: "AI",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, args }) => {
    try {
        // සම්පූර්ණ ප්‍රශ්නයක් නිර්මාණය කිරීම
        const userQuestion = args.join(" ");
        
        if (!userQuestion) {
            return conn.sendMessage(from, { text: "❌ *කරුණාකර ප්‍රශ්නයක් ලබා දෙන්න!*" }, { quoted: mek });
        }

        // ChatGPT API එකට ඉල්ලීමක් යැවීම (සමහර භාවිතය සඳහා OpenAI API)
        const response = await fetch('sk-jEefbMzLhgKOM7mugheRcwffJffuoFk_lWDpu9TvWOT3BlbkFJjE1uRDMAH2LWHa1pHkGRTHx2K_peG8Db91RDiMd8UA', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_OPENAI_API_KEY` // ඔබේ OpenAI API යතුර
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // ආකෘතිය
                messages: [{ role: "user", content: userQuestion }],
                max_tokens: 100 // ප්‍රතිචාරයේ උපරිම ශබ්ද සංඛ්‍යාව
            })
        });

        const chatResponse = await response.json();

        // ප්‍රතිචාරය ලබා ගන්න
        const replyMessage = chatResponse.choices[0].message.content;

        // ප්‍රතිචාරයක් ලෙස යැවීම
        await conn.sendMessage(from, { text: replyMessage }, { quoted: mek });

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { text: `❌ *දෝෂයක් සිදු විය:* ${e}` }, { quoted: mek });
    }
});
