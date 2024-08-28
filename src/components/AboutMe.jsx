export default function AboutMe() {
    return (
        <section className="flex flex-row w-1/2 mx-auto py-12 gap-6 text-white">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p>Hi! I'm <span className="font-bold text-green-400 text-xl">Ben</span> the founder and owner of <strong>Ben's Auto Detailing!</strong></p>
                <p>Currently I am working anywhere in the <strong>CSRA</strong> any day of the week!</p>
                <p>Give me a call <strong>anytime</strong> and I will be happy to schedule you a professional car detail!</p>
                <p>Phone: <span className="font-bold text-yellow-400">(706) 830 - 0401</span></p>
            </div>
            <img src="/images/profile.jpg" alt="picture of me (ben)" className="w-96 rounded-md shadow-md" />
        </section>
    )
}