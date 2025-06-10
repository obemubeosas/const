import { useInView } from './hooks/useInView';
import './App.css'

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.05 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${className} ${
        isInView 
          ? 'opacity-100 transform-none' 
          : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${Math.min(delay, 300)}ms` }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-6 shadow-lg w-full fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <h1 className="text-4xl text-center">Конституция Республики Казахстан</h1>
        </div>
      </header>

      <nav className="bg-white shadow-md w-full sticky top-[88px] z-40">
        <div className="max-w-[1400px] mx-auto px-4">
          <ul className="flex space-x-6 justify-center py-3">
            {['Преамбула', 'Раздел I', 'Раздел II', 'Раздел III'].map((item, index) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="w-full py-8 mt-[88px]">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Секция с ключевыми цифрами */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { number: '98', text: 'Статей в Конституции РК' },
              { number: '9', text: 'Разделов описывающих все сферы государства' },
              { number: '30+', text: 'Лет независимости и развития' }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 50}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-6 border-l-4 border-primary overflow-hidden group"
              >
                <div className="relative">
                  <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                    {item.number}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Преамбула */}
          <AnimatedSection className="mb-12 bg-white rounded-xl shadow-md p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-primary mb-6">Преамбула</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Мы, народ Казахстана, объединенный общей исторической судьбой, 
                созидая государственность на исконной казахской земле, 
                сознавая себя миролюбивым гражданским обществом, приверженным идеалам свободы, 
                равенства и согласия...
              </p>
              <div className="flex justify-end">
                <a href="#section1" className="text-primary hover:text-secondary transition-colors">
                  Читать далее →
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Основные разделы */}
          <section id="section1" className="mb-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Основы конституционного строя
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Карточки с основными положениями */}
              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300 overflow-hidden group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="bg-primary h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.69-.218 1 1 0 01-.002-2l.002-.607zM15 9.625a1 1 0 011 1v4.125c0 .621-.504 1.125-1.125 1.125H5.125A1.125 1.125 0 014 14.75v-4.125a1 1 0 011-1h10zm-2 3a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Государственное устройство</h3>
                  </div>
                  <p className="text-gray-600 mb-4">РК - демократическое, светское, правовое и социальное государство. Высшими ценностями являются человек, его права и свободы.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Демократия</span>
                    <span className="px-3 py-1 bg-secondary/10 text-primary rounded-full text-sm">Светское государство</span>
                  </div>
                  <a href="#" className="text-primary group-hover:text-secondary transition-colors inline-flex items-center">
                    Узнать больше
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300 overflow-hidden group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="bg-secondary h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Права и свободы человека</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Конституция гарантирует права и свободы человека, признанные мировым сообществом. Права человека неотчуждаемы и принадлежат каждому от рождения.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Равенство</span>
                    <span className="px-3 py-1 bg-secondary/10 text-primary rounded-full text-sm">Справедливость</span>
                  </div>
                  <a href="#" className="text-primary group-hover:text-secondary transition-colors inline-flex items-center">
                    Подробнее
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300 overflow-hidden group animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="bg-primary h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Государственные символы</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Государственными символами РК являются Флаг, Герб и Гимн. Они отражают суверенитет и независимость, культурно-исторические традиции народа.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Флаг</span>
                    <span className="px-3 py-1 bg-secondary/10 text-primary rounded-full text-sm">Герб</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Гимн</span>
                  </div>
                  <a href="#" className="text-primary group-hover:text-secondary transition-colors inline-flex items-center">
                    Изучить символы
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection delay={200} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-150">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Государственный язык
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  В Республике Казахстан государственным является казахский язык. В государственных организациях и органах местного самоуправления наравне с казахским официально употребляется русский язык.
                </p>
                <div className="flex items-center text-sm text-primary bg-blue-50 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  Статья 7 Конституции РК
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-yellow-100 hover:shadow-xl transition-all duration-150">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Единство народа
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  В Республике Казахстан признается идеологическое и политическое многообразие. Не допускается создание партий на религиозной основе.
                </p>
                <div className="flex items-center text-sm text-primary bg-yellow-50 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Статья 5 Конституции РК
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Права и обязанности граждан */}
          <section className="mb-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Права и обязанности граждан
              </h2>
            </AnimatedSection>

            {/* Интерактивная карта прав */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <AnimatedSection delay={200} className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                <h3 className="text-2xl font-semibold text-primary mb-6 relative">Основные права граждан</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Право на жизнь', desc: 'Никто не может быть произвольно лишен жизни' },
                    { title: 'Свобода слова', desc: 'Каждый имеет право свободно получать и распространять информацию' },
                    { title: 'Право на образование', desc: 'Гарантируется бесплатное среднее образование' }
                  ].map((right, index) => (
                    <div key={index} className="flex items-start group/item p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:item:bg-primary/20">
                        <span className="text-primary font-semibold">{index + 1}</span>
                      </div>
                      <div  className='w-full'>
                        <h4 className="font-semibold text-gray-800 group-hover:item:text-primary transition-colors">{right.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{right.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400} className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Обязанности граждан</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Соблюдение Конституции', desc: 'Соблюдать Конституцию и законодательство РК' },
                    { title: 'Защита Родины', desc: 'Защита Республики Казахстан является долгом и обязанностью гражданина' },
                    { title: 'Уважение прав других', desc: 'Осуществление прав не должно нарушать права других лиц' }
                  ].map((duty, index) => (
                    <div key={index} className="flex w-full items-start group/item p-3 rounded-lg hover:bg-secondary/5 transition-colors">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-4 group-hover:item:bg-secondary/20">
                        <span className="text-primary font-semibold">{index + 1}</span>
                      </div>
                      <div className='w-full'>
                        <h4 className="font-semibold text-gray-800 group-hover:item:text-primary transition-colors">{duty.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{duty.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Интерактивная инфографика */}
            <AnimatedSection delay={600} className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Гарантии конституционных прав</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">Судебная защита</h4>
                  <p className="text-sm text-gray-600">Каждому гарантируется судебная защита его прав и свобод</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">Государственная защита</h4>
                  <p className="text-sm text-gray-600">Права и свободы человека и гражданина защищаются законом</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">Общественный контроль</h4>
                  <p className="text-sm text-gray-600">Гражданское общество участвует в контроле за соблюдением прав</p>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 absolute w-full left-0">
        <AnimatedSection className="max-w-[1400px] mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Конституция Республики Казахстан</p>
        </AnimatedSection>
      </footer>
    </div>
  )
}

export default App
