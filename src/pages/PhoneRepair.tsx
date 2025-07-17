import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RepairCalculator from '@/components/repair/RepairCalculator';

const PhoneRepair = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const repairServices = [
    {
      name: "Диагностика",
      price: "300₽",
      description: "Полная диагностика неисправностей телефона"
    },
    {
      name: "Замена батареи",
      price: "от 1500₽",
      description: "Замена аккумулятора на оригинальный или качественный аналог"
    },
    {
      name: "Ремонт разъема зарядки",
      price: "от 1800₽",
      description: "Замена разъема micro-USB, USB-C или Lightning"
    },
    {
      name: "Замена динамика/микрофона",
      price: "от 1000₽",
      description: "Восстановление звука и качества связи"
    },
    {
      name: "Замена кнопок",
      price: "от 1200₽",
      description: "Ремонт кнопок включения, громкости, Home"
    },
    {
      name: "Замена камеры",
      price: "от 2500₽",
      description: "Замена основной или фронтальной камеры"
    },
    {
      name: "Ремонт после воды",
      price: "от 2000₽",
      description: "Восстановление после попадания жидкости"
    },
    {
      name: "Перепрошивка",
      price: "1500₽",
      description: "Восстановление программного обеспечения"
    }
  ];

  const phoneModels = {
    huawei: [
      { model: "X5", origin: "1600", huawei: "Honor30pro", hcopy: "4600", hpro: "P20", batch: "1800" },
      { model: "X6/X86G", origin: "1600", huawei: "V30pro", hcopy: "1600", hpro: "P20lite", batch: "1800" },
      { model: "X6A", origin: "1700", huawei: "Honor 30", hcopy: "4500", hpro: "honor X9A", batch: "4100" },
      { model: "X5plus", origin: "1700", huawei: "Honor 50ак6", hcopy: "5500", hpro: "honor X9", batch: "1800" },
      { model: "8S", origin: "1500", huawei: "Honor 70", hcopy: "5000", hpro: "honor X7", batch: "1600" },
      { model: "7X", origin: "1500", huawei: "Honor 90TFT", hcopy: "1500", hpro: "X7B", batch: "2100" },
      { model: "Nova2i", origin: "1600", huawei: "Honor 30s", hcopy: "1800", hpro: "honor 8A", batch: "1500" },
      { model: "Nova3", origin: "1600", huawei: "Honor20 or Pro", hcopy: "1800", hpro: "Honor9B", batch: "6000" },
      { model: "Nova 3i", origin: "1500", huawei: "Novay61", hcopy: "1800", hpro: "mate40pro", batch: "15000" },
      { model: "Y8pro", origin: "1500", huawei: "Nova12se", hcopy: "4000", hpro: "Honor X8b or nova lose", batch: "4600" },
      { model: "Y6lite", origin: "1500", huawei: "P30lite", hcopy: "1800", hpro: "Honor 200", batch: "4200" },
      { model: "Novalite", origin: "1500", huawei: "P40lite", hcopy: "1800", hpro: "Honor 200 lite", batch: "7500" },
      { model: "V20", origin: "1700", huawei: "nova8i or 30lite", hcopy: "2200", hpro: "Honor 300 lite", batch: "4500" },
      { model: "V10", origin: "1700", huawei: "Honor10i/lite", hcopy: "1800", hpro: "", batch: "" },
      { model: "Y8P / 30 T", origin: "4000", huawei: "Honor10xlite", hcopy: "2000", hpro: "", batch: "" },
      { model: "Nova10", origin: "4000", huawei: "Honor 10", hcopy: "1800", hpro: "", batch: "" },
      { model: "Y72019", origin: "1600", huawei: "Honor9X", hcopy: "1800", hpro: "", batch: "" },
      { model: "Y92019", origin: "1600", huawei: "Honor 8X", hcopy: "1800", hpro: "", batch: "" },
      { model: "Nova y70", origin: "1700", huawei: "9a", hcopy: "1600", hpro: "", batch: "" },
      { model: "Y72", origin: "1700", huawei: "P40lite или 9C", hcopy: "1800", hpro: "", batch: "" },
      { model: "nOVA Y90", origin: "2200", huawei: "Honor X8", hcopy: "1800", hpro: "", batch: "" },
      { model: "Nova9SE", origin: "2200", huawei: "honor X8a/honor 90lite", hcopy: "1800", hpro: "", batch: "" },
      { model: "Y92018", origin: "1600", huawei: "novay91", hcopy: "2600", hpro: "", batch: "" },
      { model: "Pasmar 2019", origin: "1600", huawei: "nova11i", hcopy: "2300", hpro: "", batch: "" }
    ],
    infinix: [
      { model: "Pova5", origin: "1800", brand: "Tecno spark 4", batch: "1600", infinix: "Hot20AO", price: "1900" },
      { model: "Povapro", origin: "1700", brand: "Tecnospark 4pro", batch: "1700", infinix: "Hot20S", price: "1800" },
      { model: "Povapro oLED", origin: "2600", brand: "Spark 4air", batch: "1700", infinix: "Hot20i", price: "1700" },
      { model: "Pova 4pro or", origin: "6000", brand: "Spark 5", batch: "1600", infinix: "infinx 12TFT", price: "2000" },
      { model: "Pova4", origin: "1700", brand: "Spark6ar", batch: "1600", infinix: "zero20TFT", price: "2500" },
      { model: "Pova2/3", origin: "1700", brand: "Spark8C", batch: "1800", infinix: "zero20TFT", price: "2000" },
      { model: "Povaneo3", origin: "1700", brand: "Spark9pro", batch: "1600", infinix: "Hot40", price: "1700" },
      { model: "Smart 6", origin: "1700", brand: "Spark20", batch: "1800", infinix: "Smart8+", price: "1800" },
      { model: "Smart7+", origin: "1700", brand: "Spark20pro", batch: "1800", infinix: "Smart8", price: "1700" },
      { model: "Smart7", origin: "1700", brand: "Spark20c", batch: "1800", infinix: "Smart8pro", price: "1600" },
      { model: "Smart7HD", origin: "1700", brand: "Spark10pro", batch: "1800", infinix: "Hot10paly", price: "1600" },
      { model: "TecnoCamon19pro", origin: "1600", brand: "Spark10", batch: "1700", infinix: "Hot 10s", price: "1500" },
      { model: "Camon19", origin: "1700", brand: "Spark10c", batch: "1700", infinix: "Hot10lite/smart5", price: "2000" },
      { model: "Camon 17+", origin: "1700", brand: "Spark8+HOT11jin tek v5+X662", batch: "1700", infinix: "Hot40pro", price: "1700" },
      { model: "Camon 16/18p", origin: "1700", brand: "Spark7", batch: "1800", infinix: "Note 30AG", price: "3000" },
      { model: "Camon 19pro", origin: "1600", brand: "Spark6GO", batch: "1600", infinix: "Note30l oled", price: "18" },
      { model: "Camon 19neo", origin: "1700", brand: "SparkGo 2023", batch: "1600", infinix: "Zero8 x687", price: "2000" },
      { model: "Camon 20or", origin: "4500", brand: "SparkGo2022", batch: "1600", infinix: "Note10pro/11pro", price: "1600" },
      { model: "Camon12pto or", origin: "3800", brand: "Hot30i", batch: "1600", infinix: "Note12TFT", price: "1700" },
      { model: "Spark 20pro+", origin: "8500", brand: "Hot20i", batch: "1600", infinix: "Note30pro TFT", price: "4000" },
      { model: "Pop6prp", origin: "1600", brand: "Hot30play", batch: "1900", infinix: "Note30pro or", price: "5000" },
      { model: "Pop7", origin: "1600", brand: "Hot30", batch: "1900", infinix: "Note30VIP or", price: "1600" },
      { model: "Pop5lite", origin: "1700", brand: "Hot12i", batch: "1800", infinix: "Note12pro", price: "" },
      { model: "Camon15air", origin: "3000", brand: "Hot12play", batch: "1700", infinix: "", price: "" },
      { model: "Camon 15", origin: "1800", brand: "Hot12pro", batch: "1700", infinix: "", price: "" },
      { model: "Camon12Air", origin: "1800", brand: "Hot11s", batch: "1700", infinix: "", price: "" },
      { model: "Camon12", origin: "1600", brand: "Hot11", batch: "1600", infinix: "", price: "" }
    ],
    iphone: [
      { model: "iPhone 5s", origin: "", copy: "", battery: "500", case: "", glass: "" },
      { model: "iPhone 6", origin: "1200", copy: "1000", battery: "800", case: "800", glass: "" },
      { model: "iPhone 6+", origin: "1500", copy: "1000", battery: "800", case: "800", glass: "" },
      { model: "iPhone 6s", origin: "1200", copy: "1100", battery: "800", case: "800", glass: "" },
      { model: "iPhone 6s+", origin: "1500", copy: "1100", battery: "800", case: "800", glass: "" },
      { model: "iPhone 7", origin: "1500", copy: "1100", battery: "800", case: "800", glass: "" },
      { model: "iPhone 7+", origin: "1800", copy: "1300", battery: "1000", case: "1000", glass: "" },
      { model: "iPhone 8/SE 2020", origin: "1600", copy: "1100", battery: "800", case: "800", glass: "700" },
      { model: "iPhone 8+", origin: "1800", copy: "1500", battery: "1000", case: "1000", glass: "700" },
      { model: "iPhone XR", origin: "3000", copy: "1700", battery: "1500", case: "2500", glass: "700" },
      { model: "iPhone X", origin: "4800", copy: "2000", battery: "1500", case: "2500", glass: "800" },
      { model: "iPhone XS", origin: "5000", copy: "2000", battery: "1500", case: "2500", glass: "700" },
      { model: "iPhone XS Max", origin: "8000", copy: "2200", battery: "1500", case: "2800", glass: "800" },
      { model: "iPhone 11", origin: "2700", copy: "1700", battery: "1600", case: "2500", glass: "700" },
      { model: "iPhone 11Pro", origin: "6000", copy: "2000", battery: "1800", case: "4000", glass: "800" },
      { model: "iPhone 11Pro Max", origin: "8000", copy: "2500", battery: "1800", case: "4500", glass: "800" },
      { model: "iPhone 12/12Pro", origin: "8000", copy: "2500", battery: "2000", case: "4500", glass: "900" },
      { model: "iPhone 12 mini", origin: "9000", copy: "5000", battery: "2000", case: "4000", glass: "900" },
      { model: "iPhone 12Pro Max", origin: "15000", copy: "5000", battery: "2500", case: "4500", glass: "1000" },
      { model: "iPhone 13", origin: "10000", copy: "4500", battery: "2500", case: "4500", glass: "1000" },
      { model: "iPhone 13mini", origin: "10500", copy: "5000", battery: "2500", case: "4000", glass: "1000" },
      { model: "iPhone 13Pro", origin: "25000", copy: "8500", battery: "2800", case: "5500", glass: "1200" },
      { model: "iPhone 13Pro Max", origin: "27000", copy: "13000", battery: "3000", case: "5500", glass: "1200" },
      { model: "iPhone 14", origin: "13000", copy: "5500", battery: "2500", case: "2500", glass: "1200" },
      { model: "iPhone 14Pro", origin: "28000", copy: "13000", battery: "3000", case: "5500", glass: "1800" },
      { model: "iPhone 14Pro Max", origin: "32000", copy: "18000", battery: "3000", case: "5500", glass: "1800" },
      { model: "iPhone 14 Plus", origin: "14000", copy: "8500", battery: "2500", case: "2500", glass: "1500" },
      { model: "iPhone 15", origin: "25000", copy: "10500", battery: "3000", case: "", glass: "2800" },
      { model: "iPhone 15Pro", origin: "28000", copy: "", battery: "3500", case: "", glass: "3000" },
      { model: "iPhone 15Pro Max", origin: "36000", copy: "21000", battery: "3500", case: "", glass: "3000" },
      { model: "iPhone 15+", origin: "20000", copy: "15000", battery: "3000", case: "", glass: "2800" }
    ],
    realme: [
      { model: "C55", origin: "1800", brand: "C35", batch: "1600", brand2: "reale114g", price: "7000" },
      { model: "C53/C51", origin: "1800", brand: "C33", batch: "1600", brand2: "Realme11pro5G", price: "6000" },
      { model: "10 5G", origin: "1800", brand: "C30", batch: "1600", brand2: "Realme10pro+", price: "4500" },
      { model: "v205G", origin: "1600", brand: "C31", batch: "1500", brand2: "A38", price: "1600" },
      { model: "X3", origin: "800", brand: "C30S", batch: "1500", brand2: "A3S/A5", price: "1800" },
      { model: "XToled", origin: "2300", brand: "C3 /A31/5/6i/A5/A9", batch: "1500", brand2: "A54", price: "1600" },
      { model: "C11/C15", origin: "1500", brand: "A54", batch: "1500", brand2: "A12/A5S", price: "1600" },
      { model: "C25/C25S/A16/narzo50A /A16/A16S /A564G", origin: "1600", brand: "A15", batch: "1500", brand2: "A58", price: "1800" },
      { model: "c21Y/C25Y", origin: "1600", brand: "A52/A72", batch: "1600", brand2: "F5", price: "1600" },
      { model: "c2/oppoA1K", origin: "1600", brand: "A554G", batch: "1600", brand2: "Reno5Lite cph 2205TFT", price: "1700" },
      { model: "c21/C112021", origin: "1600", brand: "A53", batch: "1700", brand2: "F7", price: "1600" },
      { model: "/narzo50/8i/9i", origin: "1600", brand: "", batch: "", brand2: "A17K", price: "1600" },
      { model: "Realme8G", origin: "1700", brand: "A74oled", batch: "3500", brand2: "Realme17", price: "1600" },
      { model: "Realme9/104G OR", origin: "6500", brand: "Note504g", batch: "1600", brand2: "Realme15", price: "1600" },
      { model: "Realme9/104G TFT", origin: "1500", brand: "Note50A", batch: "1600", brand2: "Reno7+/Reno8+ A96 S6", price: "5000" },
      { model: "Realme95G", origin: "1700", brand: "Narzo30", batch: "1600", brand2: "", price: "" },
      { model: "Realme 10pro 5G", origin: "1700", brand: "Realme 5", batch: "1600", brand2: "", price: "" },
      { model: "Realme10pro +", origin: "5000", brand: "Realme8pro oled", batch: "4000", brand2: "", price: "" },
      { model: "Realme9pro +", origin: "7450", brand: "Realme8pro", batch: "5000", brand2: "", price: "" },
      { model: "9pro", origin: "1600", brand: "Realme3pro/5pro", batch: "1600", brand2: "", price: "" },
      { model: "", origin: "", brand: "Realme6S", batch: "1600", brand2: "", price: "" }
    ],
    redmi: [
      { model: "Mi11lite or", origin: "4500", brand: "Pococ51", batch: "1700", brand2: "Pocom4pro4G nota114G/note11 s 4G/note125AG", price: "1600" },
      { model: "Note12pro 5g/note12pro+ TFT", origin: "1600", brand: "PocoF1", batch: "1800", brand2: "OR", price: "6000" },
      { model: "inote12pro/note12 pro+5G OR", origin: "3500", brand: "Redminote8pro", batch: "1600", brand2: "note125 4G or", price: "7500" },
      { model: "nota12TFT", origin: "1600", brand: "Pocom3pro/nota1 05G", batch: "1700", brand2: "PocoF5OR", price: "4000" },
      { model: "nota12oled", origin: "3500", brand: "Note8T", batch: "1600", brand2: "PocoF4GTOR", price: "4500" },
      { model: "Note12STFT", origin: "1600", brand: "Note9", batch: "1600", brand2: "Note12/pocoX6 OR", price: "8000" },
      { model: "nota12oled", origin: "3000", brand: "Redmi 9", batch: "1700", brand2: "Note12pro+OR", price: "4500" },
      { model: "redmi12/pocom5p ro5G", origin: "2000", brand: "Redmi9a/9c/10A", batch: "1700", brand2: "Xiami 9T", price: "3500" },
      { model: "Redme12c", origin: "1600", brand: "Note8", batch: "1600", brand2: "Xiaomi 12lite", price: "4500" },
      { model: "Redmi13C", origin: "1700", brand: "Note7", batch: "1600", brand2: "Xiaomi 12/12X", price: "6500" },
      { model: "Redmi10C/c40", origin: "1600", brand: "Note8pro or", batch: "2100", brand2: "Xiaomi13lite", price: "6500" },
      { model: "Pocox5pro5g", origin: "5500", brand: "Note9pro", batch: "1600", brand2: "PocoF5pro", price: "8500" },
      { model: "Pocorn5pro 4G/Xiaomi 13", origin: "1500", brand: "redmi /redmisuper4/", batch: "1600", brand2: "Xiaomi21pro", price: "4500" },
      { model: "Redminote13pro+ 5g", origin: "6500", brand: "Pococ65", batch: "1700", brand2: "Poco M6", price: "1700" },
      { model: "Xiaomi13T", origin: "6000", brand: "Note8T", batch: "1600", brand2: "X120m F6", price: "5000" },
      { model: "Xiaominote134G", origin: "7500", brand: "Pocox4pro5G/not e11pro5G TFT", batch: "1600", brand2: "", price: "" },
      { model: "Redminote135G", origin: "4000", brand: "Pocox4pro5G/not e11pro5G/note11 pro+ 5G OR", batch: "8500", brand2: "", price: "" },
      { model: "Redmi102022", origin: "1700", brand: "/note12pro4G", batch: "8500", brand2: "", price: "" },
      { model: "Pocom4pro/note1 15 G", origin: "2000", brand: "Mi11T", batch: "5000", brand2: "", price: "" },
      { model: "Pocom4/redmi10 5G", origin: "2000", brand: "Pocom5S/note10 4G note10S TFT", batch: "1500", brand2: "", price: "" },
      { model: "Pocom3/9T", origin: "1600", brand: "Note104G/m5s /", batch: "7500", brand2: "", price: "" },
      { model: "Pocox3 / X3pro", origin: "1700", brand: "Pocom5s/notr104 G/m5s oled", batch: "3000", brand2: "", price: "" },
      { model: "Pocox3GT", origin: "1800", brand: "Xiaomi10lite", batch: "4500", brand2: "", price: "" },
      { model: "Pocox4GT", origin: "2000", brand: "Note114AG /pocom4pro/niote 12s4G/lote110R", batch: "7500", brand2: "", price: "" },
      { model: "Pocom5", origin: "1600", brand: "Note11s4G/poco m4pro/note12s4G note114G OLED", batch: "3500", brand2: "", price: "" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-2xl font-bold text-blue-600">Enter14</a>
              <a href="/catalog" className="text-gray-700 hover:text-blue-600 font-medium">Компьютеры</a>
              <a href="/components" className="text-gray-700 hover:text-blue-600 font-medium">Комплектующие</a>
              <a href="/recycling" className="text-gray-700 hover:text-blue-600 font-medium">Выкуп техники</a>
              <a href="/3d-printing" className="text-gray-700 hover:text-blue-600 font-medium">3D печать</a>
              <a href="/repair" className="text-gray-700 hover:text-blue-600 font-medium">Ремонт</a>
              <a href="/phone-repair" className="text-blue-600 hover:text-blue-800 font-medium">Ремонт телефонов</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} className="text-blue-600" />
                <span className="text-gray-700 whitespace-nowrap">8 (924) 161-76-99</span>
              </div>
              <a href="https://wa.me/79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-green-600 hover:text-green-800">
                <Icon name="MessageCircle" size={16} />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a href="https://t.me/+79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
                <Icon name="Send" size={16} />
                <span className="text-sm">Telegram</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Ремонт <span className="text-yellow-400">телефонов</span> в Якутске
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Профессиональный ремонт iPhone, Samsung, Xiaomi и других марок. 
            Замена экранов, батарей, разъемов. Гарантия на все виды работ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" onClick={() => window.open('tel:89241617699')}>
              <Icon name="Phone" size={20} className="mr-2" />
              Записаться на ремонт
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" onClick={() => setIsCalculatorOpen(true)}>
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстрый ремонт</h3>
              <p className="text-gray-600">30-60 минут на замену экрана</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Гарантия 6 месяцев</h3>
              <p className="text-gray-600">На все виды ремонтных работ</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Оригинальные детали</h3>
              <p className="text-gray-600">Качественные запчасти и экраны</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Опытные мастера</h3>
              <p className="text-gray-600">Более 5 лет опыта ремонта</p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Цены на ремонтные работы
            </h2>
            <p className="text-lg text-gray-600">
              Стоимость работ по ремонту телефонов (без учета запчастей)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-gray-900">{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-green-600">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Repair Prices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Прайс-лист на экраны телефонов
            </h2>
            <p className="text-lg text-gray-600">
              Полный прайс-лист на ремонт и замену экранов всех популярных марок
            </p>
          </div>

          <Tabs defaultValue="huawei" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="huawei" className="flex items-center space-x-2">
                <Icon name="Smartphone" size={16} />
                <span>Huawei</span>
              </TabsTrigger>
              <TabsTrigger value="infinix" className="flex items-center space-x-2">
                <Icon name="Smartphone" size={16} />
                <span>Infinix</span>
              </TabsTrigger>
              <TabsTrigger value="iphone" className="flex items-center space-x-2">
                <Icon name="Smartphone" size={16} />
                <span>iPhone</span>
              </TabsTrigger>
              <TabsTrigger value="realme" className="flex items-center space-x-2">
                <Icon name="Smartphone" size={16} />
                <span>Realme</span>
              </TabsTrigger>
              <TabsTrigger value="redmi" className="flex items-center space-x-2">
                <Icon name="Smartphone" size={16} />
                <span>Redmi/Xiaomi</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="huawei">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="bg-red-600 p-2 rounded-lg">
                      <Icon name="Smartphone" className="text-white" size={20} />
                    </div>
                    <span>Huawei / Honor</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-semibold">Модель</th>
                          <th className="text-left py-3 px-2 font-semibold">Оригинал</th>
                          <th className="text-left py-3 px-2 font-semibold">Аналог Huawei</th>
                          <th className="text-left py-3 px-2 font-semibold">Цена</th>
                          <th className="text-left py-3 px-2 font-semibold">Модель Pro</th>
                          <th className="text-left py-3 px-2 font-semibold">Цена</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phoneModels.huawei.map((phone, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-2 font-medium">{phone.model}</td>
                            <td className="py-3 px-2">{phone.origin}₽</td>
                            <td className="py-3 px-2">{phone.huawei}</td>
                            <td className="py-3 px-2 text-green-600 font-bold">{phone.hcopy}₽</td>
                            <td className="py-3 px-2">{phone.hpro}</td>
                            <td className="py-3 px-2 text-blue-600 font-bold">{phone.batch}₽</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="infinix">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Icon name="Smartphone" className="text-white" size={20} />
                    </div>
                    <span>Infinix / Tecno</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-semibold">Модель Infinix</th>
                          <th className="text-left py-3 px-2 font-semibold">Цена</th>
                          <th className="text-left py-3 px-2 font-semibold">Модель Tecno</th>
                          <th className="text-left py-3 px-2 font-semibold">Цена</th>
                          <th className="text-left py-3 px-2 font-semibold">Infinix Pro</th>
                          <th className="text-left py-3 px-2 font-semibold">Цена</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phoneModels.infinix.map((phone, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-2 font-medium">{phone.model}</td>
                            <td className="py-3 px-2 text-green-600 font-bold">{phone.origin}₽</td>
                            <td className="py-3 px-2">{phone.brand}</td>
                            <td className="py-3 px-2 text-blue-600 font-bold">{phone.batch}₽</td>
                            <td className="py-3 px-2">{phone.infinix}</td>
                            <td className="py-3 px-2 text-purple-600 font-bold">{phone.price}₽</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="iphone">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="bg-gray-800 p-2 rounded-lg">
                      <Icon name="Smartphone" className="text-white" size={20} />
                    </div>
                    <span>iPhone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-semibold">Модель</th>
                          <th className="text-left py-3 px-2 font-semibold">Оригинал</th>
                          <th className="text-left py-3 px-2 font-semibold">Копия</th>
                          <th className="text-left py-3 px-2 font-semibold">АКБ</th>
                          <th className="text-left py-3 px-2 font-semibold">Корпус</th>
                          <th className="text-left py-3 px-2 font-semibold">Стекло</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phoneModels.iphone.map((phone, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-2 font-medium">{phone.model}</td>
                            <td className="py-3 px-2 text-green-600 font-bold">{phone.origin}₽</td>
                            <td className="py-3 px-2 text-blue-600 font-bold">{phone.copy}₽</td>
                            <td className="py-3 px-2 text-orange-600 font-bold">{phone.battery}₽</td>
                            <td className="py-3 px-2 text-purple-600 font-bold">{phone.case}₽</td>
                            <td className="py-3 px-2 text-red-600 font-bold">{phone.glass}₽</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="realme">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="bg-yellow-500 p-2 rounded-lg">
                      <Icon name="Smartphone" className="text-white" size={20} />
                    </div>
                    <span>Realme</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-semibold">Модель</th>
                          <th className="text-left py-3 px-2 font-semibold">Оригинал</th>
                          <th className="text-left py-3 px-2 font-semibold">Аналог</th>
                          <th className="text-left py-3 px-2 font-semibold">Цена</th>
                          <th className="text-left py-3 px-2 font-semibold">Модель Pro</th>
                          <th className="text-left py-3 px-2 font-semibold">Цена</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phoneModels.realme.map((phone, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-2 font-medium">{phone.model}</td>
                            <td className="py-3 px-2 text-green-600 font-bold">{phone.origin}₽</td>
                            <td className="py-3 px-2">{phone.brand}</td>
                            <td className="py-3 px-2 text-blue-600 font-bold">{phone.batch}₽</td>
                            <td className="py-3 px-2">{phone.brand2}</td>
                            <td className="py-3 px-2 text-purple-600 font-bold">{phone.price}₽</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="redmi">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <Icon name="Smartphone" className="text-white" size={20} />
                    </div>
                    <span>Redmi / Xiaomi / Poco</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-semibold">Модель</th>
                          <th className="text-left py-3 px-2 font-semibold">Оригинал</th>
                          <th className="text-left py-3 px-2 font-semibold">Аналог</th>
                          <th className="text-left py-3 px-2 font-semibold">Цена</th>
                          <th className="text-left py-3 px-2 font-semibold">Модель Pro</th>
                          <th className="text-left py-3 px-2 font-semibold">Цена</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phoneModels.redmi.map((phone, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-2 font-medium">{phone.model}</td>
                            <td className="py-3 px-2 text-green-600 font-bold">{phone.origin}₽</td>
                            <td className="py-3 px-2">{phone.brand}</td>
                            <td className="py-3 px-2 text-blue-600 font-bold">{phone.batch}₽</td>
                            <td className="py-3 px-2">{phone.brand2}</td>
                            <td className="py-3 px-2 text-purple-600 font-bold">{phone.price}₽</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Icon name="AlertTriangle" size={20} className="text-yellow-600 mr-2" />
                Важная информация
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Диагностика входит в стоимость ремонта</li>
                <li>• Цены указаны без учета стоимости запчастей</li>
                <li>• Сроки ремонта зависят от наличия деталей</li>
                <li>• При отказе от ремонта диагностика 300₽</li>
                <li>• Гарантия не покрывает механические повреждения</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                <Icon name="CheckCircle" size={20} className="text-green-600 mr-2" />
                Наши преимущества
              </h3>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• Работаем с 2018 года</li>
                <li>• Более 3000 отремонтированных телефонов</li>
                <li>• Используем только качественные запчасти</li>
                <li>• Бесплатная предварительная диагностика</li>
                <li>• Работаем без выходных</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Записаться на ремонт</h2>
          <p className="text-green-100 mb-8 text-lg">
            Свяжитесь с нами удобным способом для консультации и записи
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Icon name="Phone" size={24} />
              <span className="text-xl font-semibold">8 (924) 161-76-99</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} />
              <span>Пн-Вс: 9:00-20:00</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg transition-colors">
                <Icon name="MessageCircle" size={20} />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/+79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg transition-colors">
                <Icon name="Send" size={20} />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="/" className="hover:text-gray-300">Главная</a>
            <a href="/repair" className="hover:text-gray-300">Общий ремонт</a>
            <a href="/catalog" className="hover:text-gray-300">Каталог</a>
            <a href="/3d-printing" className="hover:text-gray-300">3D печать</a>
          </div>
          <div className="text-gray-400">
            <p>© 2024 Enter14. Ремонт телефонов в Якутске</p>
            <p className="text-sm mt-2">г. Якутск, ул. П. Алексеева, 17</p>
          </div>
        </div>
      </footer>

      {/* Calculator Modal */}
      <RepairCalculator 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />
    </div>
  );
};

export default PhoneRepair;