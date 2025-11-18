"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Poem
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                       My Dearest Geethika,

Happy 16th Birthday, my love! (My pookie wookie!😘, My everything❤️❤️, Mini Dora❤️) 🎂✨
INFORMAL MESSAGE: Eh yooo it's time for your surprise. 🥳🥳🥳🥳🥳💐💐 .IT IS YOUR BIRTHDAYYYY TODAYYY. OMG I cant believe my geethika turned 16 finally. (Not a kid anymore😔). Today is the most wonderful day to me because obv my wife was born. Sandhya maam indeed gave birth to my world (●'◡'●). Anyways lemme be formal now. Idts I can express my love for u in this passage, but I will surely try 😁😁
FORMAL MESSAGE:I can’t express in words how much you mean to mee, but I’ll try my best. Even though we are miles apart, you are always in my heart, and you fill my thoughts every single day. You are my greatest blessing, and I thank Lord Krishna every day for bringing someone as pure, beautiful, and kind as you into my life.
I miss everything about you—the sound of your voice, the way your eyes light up when you smile, the way your laughter feels like music to my soul (better than arijith singh tbh 😝😝😝). It's the little things that make me fall more in love with you every day, and the distance only makes my heart grow fonder. I wish I could be there with you to celebrate today, but even though we can’t be together physically, please know that I am right there with you, within ur heart, cherishing every moment of you.
We’ve got six years ahead, but I believe that no distance can break what we share. I know that we will both grow stronger, and our love will only deepen with time. Krishna will watch over us, and guide us until the day I can hold you close again.
You are my heart Geethika, and I miss you so much more than words can say. I can’t wait for the day we’ll finally be together, but until then, know that my love for you will only continue to grow, no matter the miles that separate us. U dont need to worry about me cheating on you cuz ur the first girl who I have loved with my enitre heart and i promise will keep doing that until i draw my last breath. I REALLYYYY LOVEEEEE YOUUUUU JAANNNN😘😘😘😘😘❤️❤️. I remember and i will definitely keep that promise of mine.
I just wanted to take a moment to say that I’m reallyyyy sorryyyyy if I’ve hurt you in any way, even unintentionally. 😔 You mean the absolute world to me, and I never want to cause you any pain. 💕💕💕💕💕 I’m so grateful to have you in my life, and I’ll always try my best to make you feel as loved and appreciated as you deserve. 💫💖 Enjoy every moment of your special day—you're one of a kind, and I’m lucky to be with you! 😘🎁💐"
May this year bring you all the happiness, love, and blessings you deserve. I’ll always be here, loving you with all my heart. ❤️😘

With all my love,
Teddy Bear! (aka Doraemon)
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
