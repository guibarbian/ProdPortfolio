import styles from '../styles.module.css'
import Section from '../../Section/Section'
import ServiceCard from '../../ServiceCard/ServiceCard'
import Titulo from '../../Titulo/Titulo'
import ServiceBody from '../../ServiceCard/components/ServiceBody'
import Proposta from '../../ServiceCard/components/Proposta'

const Servicos = () => {
  return (
    <>
        <Section id='servicos' titulo='SERVIÇOS' content='servicos'>
          <ul className={styles.responsavel}>
            <li>Serviços disponíveis e sua média de investimento</li>
          </ul>
            <ul className={styles.cards}>
              <li>
                <ServiceCard>
                  <Titulo titulo='MIXAGEM' color='--mix-color' size='medium'></Titulo>
                  <ServiceBody>
                    <p style={{margin:`7px 0 8px 0`}}>Transformo suas faixas brutas em uma música equilibrada e impactante, pronta para transmitir emoção em qualquer plataforma.</p>
                    <Proposta titleString='SINGLE' titleColor='--mix-color' descString='1 faixa' preco='A partir de R$120,00'/>
                    <Proposta titleString='EP' titleColor='--mix-color' descString='até 5 faixas' preco='A partir de R$540,00'/>
                    <Proposta titleString='ÁLBUM' titleColor='--mix-color' descString='até 10 faixas' preco='A partir de R$1.080,00'/>
                  </ServiceBody>
                </ServiceCard>
              </li>
              
              <li>
                <ServiceCard>
                  <Titulo titulo='MASTERIZAÇÃO' color='--master-color' size='medium'></Titulo>
                  <ServiceBody>
                    <p style={{margin:`15px 0 8px 0`}}>Finalizo sua música para soar profissional em todas as plataformas digitais, mantendo loudness competitivo e fidelidade.</p>
                    <Proposta titleString='SINGLE' titleColor='--master-color' descString='1 faixa' preco='A partir de R$80,00'/>
                    <Proposta titleString='EP' titleColor='--master-color' descString='até 5 faixas' preco='A partir de R$360,00'/>
                    <Proposta titleString='ÁLBUM' titleColor='--master-color' descString='até 10 faixas' preco='A partir de R$720,00'/>
                  </ServiceBody>
                </ServiceCard>
              </li>

              <li>
                <ServiceCard>
                  <Titulo titulo='PRODUÇÃO' color='--prod-color' size='medium'></Titulo>
                  <ServiceBody>
                    <p style={{margin:`15px 0 8px 0`}}>Do rascunho à versão final: arranjos, gravação, mix e master para transformar suas ideias em músicas prontas para o mundo.</p>
                    <Proposta titleString='SINGLE' titleColor='--prod-color' descString='1 faixa' preco='A partir de R$600,00'/>
                    <Proposta titleString='EP' titleColor='--prod-color' descString='até 5 faixas' preco='A partir de R$2.700,00'/>
                    <Proposta titleString='ÁLBUM' titleColor='--prod-color' descString='até 10 faixas' preco='A partir de R$5.400,00'/>
                  </ServiceBody>
                </ServiceCard>
              </li>

              <li>
                <ServiceCard>
                  <Titulo titulo='ENSAIO GRAVADO' color='--session-color' size='medium'></Titulo>
                  <ServiceBody>
                    <p> Captação multipista de ensaios ou apresentações em estúdio, com áudio mixado e opção de vídeo profissional editado para divulgação.</p>
                    <Proposta titleString='APENAS ÁUDIO' titleColor='--session-color' descString='até 5 faixas mixadas' preco='A partir de R$1.000,00'/>
                    <Proposta titleString='ÁUDIO + VÍDEO' titleColor='--session-color' descString='até 5 faixas mixadas e vídeos captados' preco='A partir de R$1.600,00'/>
                    <Proposta titleString='ÁUDIO + VÍDEO EDITADO' titleColor='--session-color' descString='até 5 faixas mixadas e vídeos editados' preco='A partir de R$2.500,00'/>
                  </ServiceBody>
                </ServiceCard>
              </li>
            </ul>

            <p>O valor dos serviços varia de acordo com a natureza e comprimento da(s) música(s)</p>
        </Section>
    </>
  )
}

export default Servicos