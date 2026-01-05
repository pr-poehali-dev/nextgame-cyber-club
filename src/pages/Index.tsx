import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const schedule = [
    { time: '10:00 - 14:00', period: 'Утренняя сессия', price: '300 ₽/час', status: 'Свободно' },
    { time: '14:00 - 18:00', period: 'Дневная сессия', price: '350 ₽/час', status: 'Занято' },
    { time: '18:00 - 22:00', period: 'Вечерняя сессия', price: '400 ₽/час', status: 'Свободно' },
    { time: '22:00 - 00:00', period: 'Ночная сессия', price: '350 ₽/час', status: 'Свободно' },
  ];

  const features = [
    {
      icon: 'Gamepad2',
      title: 'Топовое железо',
      description: 'RTX 4090, Intel i9, 240Hz мониторы',
    },
    {
      icon: 'Clock',
      title: 'Работаем до полуночи',
      description: 'Открыты каждый день с 10:00 до 00:00',
    },
    {
      icon: 'Users',
      title: 'Дружное комьюнити',
      description: 'Найди друзей для игр',
    },
    {
      icon: 'Zap',
      title: 'Гигабитный интернет',
      description: 'Пинг <5ms к любым серверам',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow-pulse">
              <Icon name="Gamepad2" className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-heading font-bold text-glow">NEXTGAME</h1>
          </div>
          
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              О клубе
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="text-foreground/80 hover:text-primary transition-all hover:scale-105"
            >
              Расписание
            </button>
          </div>

          <Button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-lg shadow-primary/50">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://cdn.poehali.dev/projects/1e531193-1ba5-4b21-ad0a-c682b57f7ba8/files/b9b50c4b-d7fc-4541-9012-2ee338e6c870.jpg"
            alt="Gaming setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="animate-fade-in">
            <h2 className="text-7xl md:text-9xl font-heading font-bold mb-6 text-glow bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
              NEXTGAME
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-in-left">
              Киберспортивный клуб нового поколения
            </p>
            <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-slide-in-right">
              Погрузись в мир профессионального гейминга. Турниры, обучение, топовое оборудование.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap animate-scale-in">
              <Button
                onClick={() => scrollToSection('schedule')}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-all shadow-2xl shadow-primary/50 text-lg px-8 py-6"
              >
                <Icon name="Clock" size={20} className="mr-2" />
                Расписание
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all text-lg px-8 py-6"
              >
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="perspective-card bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 px-6 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-6xl font-heading font-bold mb-4 text-glow">О клубе NEXTGAME</h2>
            <p className="text-xl text-muted-foreground">Место, где рождаются чемпионы</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <Card className="perspective-card bg-card/50 backdrop-blur border-primary/30 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-2">Наша миссия</h3>
                    <p className="text-muted-foreground">
                      Создать пространство, где каждый игрок может раскрыть свой потенциал и достичь профессионального уровня в киберспорте.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="perspective-card bg-card/50 backdrop-blur border-secondary/30 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-2">Что мы предлагаем</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        40+ игровых станций с топовым железом
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        Работаем каждый день с 10:00 до 00:00
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        Дружное игровое комьюнити
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        Стриминговая зона для контент-мейкеров
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className="animate-slide-in-right">
              <Card className="perspective-card bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur border-primary/30 p-8">
                <h3 className="font-heading text-3xl font-bold mb-6">Наши достижения</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card/50 rounded-lg neon-border border-primary">
                    <div className="text-5xl font-heading font-bold text-primary mb-2">40+</div>
                    <div className="text-sm text-muted-foreground">Игровых станций</div>
                  </div>
                  <div className="text-center p-6 bg-card/50 rounded-lg neon-border border-secondary">
                    <div className="text-5xl font-heading font-bold text-secondary mb-2">14</div>
                    <div className="text-sm text-muted-foreground">Часов работы в день</div>
                  </div>
                  <div className="text-center p-6 bg-card/50 rounded-lg neon-border border-accent">
                    <div className="text-5xl font-heading font-bold text-accent mb-2">2000+</div>
                    <div className="text-sm text-muted-foreground">Активных игроков</div>
                  </div>
                  <div className="text-center p-6 bg-card/50 rounded-lg neon-border border-primary">
                    <div className="text-5xl font-heading font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Работаем без выходных</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="min-h-screen flex items-center py-20 px-6 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-6xl font-heading font-bold mb-4 text-glow">Расписание работы клуба</h2>
            <p className="text-xl text-muted-foreground">Ежедневно • 10:00 - 00:00</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {schedule.map((item, index) => (
              <Card
                key={index}
                className="perspective-card bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all animate-slide-in-left cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <Icon name="Clock" className="text-primary mx-auto mb-2" size={24} />
                        <div className="text-sm font-mono text-muted-foreground">{item.time}</div>
                      </div>
                      
                      <div className="h-16 w-px bg-primary/30" />
                      
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {item.period}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Wallet" size={16} className="text-accent" />
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`px-4 py-2 rounded-lg font-bold ${
                        item.status === 'Свободно' 
                          ? 'bg-accent/20 text-accent neon-border border-accent' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.status}
                      </div>
                      
                      <Button className="bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform">
                        <Icon name="Calendar" size={18} className="mr-2" />
                        Забронировать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center animate-scale-in">
            <p className="text-muted-foreground text-lg mb-4">Забронируйте место заранее или приходите в любое время!</p>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить и забронировать
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-12 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">NEXTGAME</h3>
              <p className="text-muted-foreground text-sm">
                Киберспортивный клуб для настоящих профессионалов
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Mail" size={16} />
                  info@nextgame.ru
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Геймерская, 1
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
            © 2025 NEXTGAME. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}