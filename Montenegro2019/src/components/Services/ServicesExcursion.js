import React, { Component } from 'react';
import Title from '../Helpers/Title';
import { FaMountain, FaShip, FaWater, FaChurch } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class ServicesExcursions extends Component {
  state = {
    services: [
      {
        icon: <FaMountain />,
        title: 'mountain tour',
        serviceTitle: 'All viewports',
        info:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius dolores sapiente impedit blanditiis sunt non laborum, deleniti molestiae ratione necessitatibus nesciunt. Eaque excepturi sapiente ea ipsa nemo tempore minus beatae veniam omnis totam, nihil accusantium ipsum velit ut a consectetur quisquam error. Tenetur qui mollitia vel sit ex labore!',
        main:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatibus modi provident fuga omnis id accusamus impedit, deserunt, explicabo nam commodi ab quam dignissimos cupiditate natus corporis quis architecto! Quas aut qui totam consectetur. Ab autem animi doloribus perferendis et velit? Ea sed incidunt animi. A aliquam consequuntur eius odio ipsam iusto nulla hic, porro et. Vel, quae veritatis. Rerum laborum accusamus quaerat neque. Iure voluptas consequatur voluptatum qui dicta earum, exercitationem porro dignissimos corporis repudiandae iste velit nostrum minima provident quisquam, natus tenetur praesentium facere dolorum quaerat fugiat autem itaque quam nulla. Enim neque sapiente sint maiores soluta, sequi aut laborum ratione? Id culpa nihil impedit ex exercitationem molestias facere autem distinctio ad, laboriosam nam, delectus magnam maiores eaque dignissimos quam doloremque possimus corporis in, laudantium repudiandae nobis voluptate maxime! Delectus odit fuga amet numquam facilis quibusdam! Autem in dolor neque magnam officiis id corrupti perspiciatis deleniti eos cum sed facere vitae, saepe, molestias tenetur illum mollitia doloribus dicta hic iusto eum! Nemo, eum totam aspernatur, hic iure ex consequuntur quidem temporibus nihil libero voluptatum minima atque quo officiis facere debitis reiciendis error in dolorum. Quasi, asperiores laborum. Nemo ad nulla aliquid eligendi adipisci, veritatis at porro itaque soluta.'
      },
      {
        icon: <FaWater />,
        title: 'best beaches tour',
        serviceTitle: 'Wanna be alone? I know some nice places',
        info:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius dolores sapiente impedit blanditiis sunt non laborum, deleniti molestiae ratione necessitatibus nesciunt. Eaque excepturi sapiente ea ipsa nemo tempore minus beatae veniam omnis totam, nihil accusantium ipsum velit ut a consectetur quisquam error. Tenetur qui mollitia vel sit ex labore!',
        main:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatibus modi provident fuga omnis id accusamus impedit, deserunt, explicabo nam commodi ab quam dignissimos cupiditate natus corporis quis architecto! Quas aut qui totam consectetur. Ab autem animi doloribus perferendis et velit? Ea sed incidunt animi. A aliquam consequuntur eius odio ipsam iusto nulla hic, porro et. Vel, quae veritatis. Rerum laborum accusamus quaerat neque. Iure voluptas consequatur voluptatum qui dicta earum, exercitationem porro dignissimos corporis repudiandae iste velit nostrum minima provident quisquam, natus tenetur praesentium facere dolorum quaerat fugiat autem itaque quam nulla. Enim neque sapiente sint maiores soluta, sequi aut laborum ratione? Id culpa nihil impedit ex exercitationem molestias facere autem distinctio ad, laboriosam nam, delectus magnam maiores eaque dignissimos quam doloremque possimus corporis in, laudantium repudiandae nobis voluptate maxime! Delectus odit fuga amet numquam facilis quibusdam! Autem in dolor neque magnam officiis id corrupti perspiciatis deleniti eos cum sed facere vitae, saepe, molestias tenetur illum mollitia doloribus dicta hic iusto eum! Nemo, eum totam aspernatur, hic iure ex consequuntur quidem temporibus nihil libero voluptatum minima atque quo officiis facere debitis reiciendis error in dolorum. Quasi, asperiores laborum. Nemo ad nulla aliquid eligendi adipisci, veritatis at porro itaque soluta.'
      },
      {
        icon: <FaShip />,
        title: 'sea tour',
        serviceTitle: 'Fishing, swimming',
        info:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius dolores sapiente impedit blanditiis sunt non laborum, deleniti molestiae ratione necessitatibus nesciunt. Eaque excepturi sapiente ea ipsa nemo tempore minus beatae veniam omnis totam, nihil accusantium ipsum velit ut a consectetur quisquam error. Tenetur qui mollitia vel sit ex labore!sint maiores soluta, sequi aut laborum ratione? Id culpa nihil impedit ex exercitationem molestias facere autem distinctio ad, laboriosam nam, delectus magnam maiores eaque dignissimos quam doloremque possimus corporis in, laudantium repudiandae nobis voluptate maxime! Delectus odit fuga amet numquam facilis quibusdam! Autem in dolor neque magnam officiis id corrupti perspiciatis deleniti eos cum sed facere vitae, saepe, molestias tenetur illum mollitia doloribus dicta hic iusto eum! Nemo, eum totam aspernatur, hic iure ex consequuntur quidem temporibus nihil libero voluptatum minima atque quo officiis facere debitis reiciendis error in dolorum. Quasi, asperiores laborum. Nemo ad nulla aliquid eligendi adipisci, veritatis at porro itaque soluta.',
        main:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatibus modi provident fuga omnis id accusamus impedit, deserunt, explicabo nam commodi ab quam dignissimos cupiditate natus corporis quis architecto! Quas aut qui totam consectetur. Ab autem animi doloribus perferendis et velit? Ea sed incidunt animi. A aliquam consequuntur eius odio ipsam iusto nulla hic, porro et. Vel, quae veritatis. Rerum laborum accusamus quaerat neque. Iure voluptas consequatur voluptatum qui dicta earum, exercitationem porro dignissimos corporis repudiandae iste velit nostrum minima provident quisquam, natus tenetur praesentium facere dolorum quaerat fugiat autem itaque quam nulla. Enim neque sapiente sint maiores soluta, sequi aut laborum ratione? Id culpa nihil impedit ex exercitationem molestias facere autem distinctio ad, laboriosam nam, delectus magnam maiores eaque dignissimos quam doloremque possimus corporis in, laudantium repudiandae nobis voluptate maxime! Delectus odit fuga amet numquam facilis quibusdam! Autem in dolor neque magnam officiis id corrupti perspiciatis deleniti eos cum sed facere vitae, saepe, molestias tenetur illum mollitia doloribus dicta hic iusto eum! Nemo, eum totam aspernatur, hic iure ex consequuntur quidem temporibus nihil libero voluptatum minima atque quo officiis facere debitis reiciendis error in dolorum. Quasi, asperiores laborum. Nemo ad nulla aliquid eligendi adipisci, veritatis at porro itaque soluta.sint maiores soluta, sequi aut laborum ratione? Id culpa nihil impedit ex exercitationem molestias facere autem distinctio ad, laboriosam nam, delectus magnam maiores eaque dignissimos quam doloremque possimus corporis in, laudantium repudiandae nobis voluptate maxime! Delectus odit fuga amet numquam facilis quibusdam! Autem in dolor neque magnam officiis id corrupti perspiciatis deleniti eos cum sed facere vitae, saepe, molestias tenetur illum mollitia doloribus dicta hic iusto eum! Nemo, eum totam aspernatur, hic iure ex consequuntur quidem temporibus nihil libero voluptatum minima atque quo officiis facere debitis reiciendis error in dolorum. Quasi, asperiores laborum. Nemo ad nulla aliquid eligendi adipisci, veritatis at porro itaque soluta.'
      },
      {
        icon: <FaChurch />,
        title: 'ortodox churches tour',
        serviceTitle: 'Eat. Pray. Love',
        info:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius dolores sapiente impedit blanditiis sunt non laborum, deleniti molestiae ',
        main:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatibus modi provident fuga omnis id accusamus impedit, deserunt, explicabo nam commodi ab quam dignissimos cupiditate natus corporis quis architecto! Quas aut qui totam consectetur. Ab autem animi doloribus perferendis et velit? Ea sed incidunt animi. A aliquam consequuntur eius odio ipsam iusto nulla hic, porro et. Vel, quae veritatis. Rerum laborum accusamus quaerat neque. Iure voluptas consequatur voluptatum qui dicta earum, exercitationem porro dignissimos corporis repudiandae iste velit nostrum minima provident quisquam, '
      }
    ]
  };

  render() {
    const { services } = this.state;
    return (
      <section className='services'>
        <Title title='services' />
        <div className='container'>
          <Tabs>
            <TabList className='service'>
              {services.map(service => (
                <Tab className='tab' key={service.title}>
                  <span>{service.icon}</span>
                  <h6>{service.title}</h6>
                </Tab>
              ))}
            </TabList>
            {services.map(item => (
              <TabPanel className='tabPanel' key={item.serviceTitle}>
                <h6>{item.serviceTitle}</h6>
                <p>{item.info}</p>
                <p>{item.main}</p>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </section>
    );
  }
}

export default ServicesExcursions;
