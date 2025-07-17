import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RepairPrices = () => {
  const services = [
    {
      category: "Диагностика",
      icon: "Search",
      color: "bg-blue-500",
      items: [
        { name: "Диагностика телефона", price: "500 ₽" },
        { name: "Диагностика планшета", price: "600 ₽" },
        { name: "Диагностика компьютера", price: "800 ₽" },
        { name: "Диагностика ноутбука", price: "700 ₽" }
      ]
    },
    {
      category: "Замена экранов",
      icon: "Monitor",
      color: "bg-green-500",
      items: [
        { name: "Замена стекла iPhone", price: "от 2000 ₽" },
        { name: "Замена дисплея iPhone", price: "от 3500 ₽" },
        { name: "Замена экрана Samsung", price: "от 2500 ₽" },
        { name: "Замена экрана Xiaomi", price: "от 1800 ₽" }
      ]
    },
    {
      category: "Ремонт телефонов",
      icon: "Smartphone",
      color: "bg-purple-500",
      items: [
        { name: "Замена батареи", price: "от 1500 ₽" },
        { name: "Ремонт разъема зарядки", price: "от 1200 ₽" },
        { name: "Замена динамика", price: "от 800 ₽" },
        { name: "Ремонт кнопок", price: "от 600 ₽" }
      ]
    },
    {
      category: "Компьютерный ремонт",
      icon: "Monitor",
      color: "bg-orange-500",
      items: [
        { name: "Чистка от пыли", price: "800 ₽" },
        { name: "Переустановка Windows", price: "1200 ₽" },
        { name: "Замена термопасты", price: "600 ₽" },
        { name: "Ремонт материнской платы", price: "от 2000 ₽" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Цены на <span className="text-blue-600">ремонт</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Честные цены на качественный ремонт. Гарантия на все виды работ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`${service.color} p-3 rounded-lg`}>
                    <Icon name={service.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start">
                      <span className="text-sm text-gray-700 leading-tight">
                        {item.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600 ml-2">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 max-w-2xl mx-auto rounded-r-lg">
            <div className="flex items-center">
              <Icon name="AlertTriangle" className="text-yellow-500 mr-3" size={20} />
              <p className="text-sm text-gray-700">
                <strong>Важно:</strong> Точная стоимость определяется после диагностики. 
                Указанные цены являются ориентировочными.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairPrices;