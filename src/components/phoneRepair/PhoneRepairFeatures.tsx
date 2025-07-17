import React from 'react';
import Icon from '@/components/ui/icon';

const PhoneRepairFeatures = () => {
  const features = [
    {
      icon: "Clock",
      color: "green",
      title: "Быстрый ремонт",
      description: "30-60 минут на замену экрана"
    },
    {
      icon: "Shield",
      color: "blue",
      title: "Гарантия 6 месяцев",
      description: "На все виды ремонтных работ"
    },
    {
      icon: "Star",
      color: "purple",
      title: "Оригинальные детали",
      description: "Качественные запчасти и экраны"
    },
    {
      icon: "Wrench",
      color: "orange",
      title: "Опытные мастера",
      description: "Более 5 лет опыта ремонта"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(feature.color)}`}>
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhoneRepairFeatures;