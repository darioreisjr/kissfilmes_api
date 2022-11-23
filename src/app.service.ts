import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getAtores(): any {
    let atores = [{
      id: 1,
      foto: 'https://imageup.me/kissflixatorajelina',
      nome: 'Angelina Jolie',
      data_nascimento: '4 de junho de 1975',
      nacionalidade: 'norte-americana',
      ocupacao: 'atriz - cineasta - ativista',
      biografia: 'Angelina Jolie Voight (Los Angeles, 4 de junho de 1975) é uma atriz, cineasta e ativista humanitária americana. Estreou no cinema ao lado de seu pai, Jon Voight, em Lookin to Get Out(1982); porém, a carreira dela começou a sério uma década mais tarde, quando participou do filme de baixo orçamento Cyborg 2(1993), seguido de seu primeiro papel principal em uma grande produção em Hackers(1995).Posteriormente, foi escalada para estrelar os telefilmes biográficos George Wallace(1997), pelo qual ganhou seu primeiro Prêmio Globo de Ouro de Melhor Atriz Coadjuvante em Televisão e recebeu uma indicação ao Prêmio Emmy do Primetime para Melhor Atriz Coadjuvante em minissérie ou telefilme, e Gia(1998), vencendo novamente o Globo de Ouro, só que, desta vez, na categoria de Melhor Atriz em Minissérie ou Filme para Televisão.Em 1999, recebeu elogios por parte dos críticos especializados por sua interpretação como Lisa Rowe no filme Girl, Interrupted, pelo qual ganhou o Oscar de Melhor Atriz Coadjuvante.',

    }, {
      id: 2,
      foto: 'https://imageup.me/kissflixatorsandrabullock',
      nome: 'Sandra Bullock',
      data_nascimento: '26 de julho de 1964',
      nacionalidade: 'norte-americana',
      ocupacao: 'atriz - produtora de cinema',	
      biografia: 'Sandra Bullock possui ascendência inglesa, irlandesa, alemã e francesa. Nascida em Arlington na Virginia, seu pai, John Wilson Bullock (1925-2018), era funcionário do Exército dos Estados Unidos e professor de técnica vocal. Sua mãe, Helga Mathilde Meyer (1942–2000), era alemã e cantora de Ópera, fato que garantiu à Sandra e a sua irmã Gesine, que aprendessem a língua alemã. Helga, cantou no Staatstheater Nürnberg e no Festival de Salzburgo e ensinou canto no Mary Washington College. Foi graças a essa carreira materna que Sandra a mais velha das duas irmãs, passou boa parte de sua infância em viagens pela Europa, "Quando crianças, as irmãs Bullock viveram na Alemanha, mudando-se para a Virgínia quando Sandra tinha 11 anos e Gesine tinha cinco anos, onde seu pai, John Bullock, trabalhava no Pentágono. Helga, continuou a viajar de volta à Europa para trabalho - às vezes levando suas filhas com ela em turnê". Foi graças a isso, também, que subiu pela primeira vez num palco. "Sempre havia uma criancinha cigana numa ópera. Era, então, que eu entrava em cena", diverte-se Sandra. Com 10 anos de idade, Sandra e sua família retornaram para Virginia. Em 1982, ela se graduou na Washington-Lee High School. Após o high school foi para a Carolina do Norte, onde se formou em Teatro na East Carolina University. Mudou-se então para Nova York buscando uma carreira de atriz. O avô materno da atriz era um cientista de foguetes em Nuremberg, Alemanha. Inclusive, foi nessa estação militar que o pai de Sandra, John Bullock, conheceu sua futura esposa, Helga',
    }
  ]
    return atores
  }
}
