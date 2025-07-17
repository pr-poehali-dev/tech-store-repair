import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-accentGray text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Zap" className="text-techBlue" size={24} />
              <h3 className="text-xl font-bold">STL 3D</h3>
            </div>
            <p className="text-gray-400">3D печать и технологии</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/catalog" className="hover:text-white transition-colors">Компьютеры</a></li>
              <li><a href="/laptops" className="hover:text-white transition-colors">Ноутбуки</a></li>
              <li><a href="/components" className="hover:text-white transition-colors">Комплектующие</a></li>
              <li><a href="/recycling" className="hover:text-white transition-colors">Выкуп техники</a></li>
              <li><a href="/3d-printing" className="hover:text-white transition-colors">3D печать</a></li>
              <li><a href="/repair" className="hover:text-white transition-colors">Ремонт</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Ремонт телефонов</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ремонт ноутбуков</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Диагностика</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div className="whitespace-nowrap">+7 (924) 161-76-99</div>
              <div>Пн-Сб: 10:00-19:00</div>
              <div className="flex gap-2">
                <a href="https://wa.me/79241617699" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  <Icon name="MessageCircle" size={16} className="inline mr-1" />
                  WA
                </a>
                <a href="https://t.me/+79241617699" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <Icon name="Send" size={16} className="inline mr-1" />
                  TG
                </a>
              </div>
              <div className="text-amber-400 text-sm font-medium">STL 3D:</div>
              <div className="whitespace-nowrap">+7 (924) 863-88-08</div>
              <div className="flex gap-2">
                <a href="https://wa.me/79248638808" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  <Icon name="MessageCircle" size={16} className="inline mr-1" />
                  WA
                </a>
                <a href="https://t.me/+79248638808" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <Icon name="Send" size={16} className="inline mr-1" />
                  TG
                </a>
              </div>
              <a 
                href="https://2gis.ru/yakutsk/search/enter14%20якутск/firm/7037402698746526/129.737441%2C62.036234/tab/reviews?m=129.737441%2C62.036234%2F17.34" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-white transition-colors mt-2"
              >
                <Icon name="MapPin" size={16} />
                <span>ул. П. Алексеева, 17</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechStore. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;