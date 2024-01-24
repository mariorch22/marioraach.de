


const Ehrenamt = () => {
    return(
        <div className="px-2 py-6 md:py-0 md:bg-black rounded-tr-3xl grid  md:grid-rows-[2fr_6fr] text-gray-500 md:mt-2 md:mr-2">
            <h1 className='text-5xl md:text-7xl flex justify-center items-center h-32'>Ehrenamt</h1>
            <div className="grid grid-cols-1 gap-8">

                <div className="grid md:grid-cols-[2fr_3fr]">
                    <img className="rounded-3xl md:w-96" src="/about/fussball.jpg" />
                    <span>
                        <h1 className="text-lg md:text-2xl px-6 pt-4 font-bold">Jugendtrainer beim TV Melchingen</h1>
                        <small className="font-bold w-full px-6">2021-heute</small>
                        <span className="flex flex-col gap-1 px-6 py-3">
                            <span className="flex"><p>▷</p><p className="pl-3">Verantwortlich für die Entwicklung sportlicher Fähigkeiten und Teamgeist bei Jugendlichen</p></span>
                            <span className="flex"><p>▷</p><p className="pl-3">Leitung von zwei wöchentlichen Trainingseinheiten und Betreuung von Spielen</p></span>
                        </span>
                    </span>
                </div>

                <div className="grid md:grid-cols-[2fr_3fr]">
                    <img className="rounded-3xl md:w-96" src="/about/pfadis.jpg" />
                    <span>
                        <h1 className="text-lg md:text-2xl px-6 pt-4 font-bold">Leiter einer jugendlichen Pfadfindergruppe bei der DPSG Salmendingen</h1>
                        <small className="font-bold w-full px-6">2017-2018</small>
                        <span className="flex flex-col gap-1 px-6 py-3">
                            <span className="flex"><p>▷</p><p className="pl-3">Förderung der persönlichen Entwicklung und Teamarbeit der Jugendlichen</p></span>
                            <span className="flex"><p>▷</p><p className="pl-3">Leitung von zwei wöchentlichen Trainingseinheiten und Betreuung von Spielen</p></span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Ehrenamt