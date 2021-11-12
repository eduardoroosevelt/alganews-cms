import React from "react";
import confirm from "../../../core/utils/confirm";
import info from "../../../core/utils/info";
import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar";
import SessionController from "../../components/SessionController";
import * as DL from './Default.layout.styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}


function DefaultLayout(props: DefaultLayoutProps) {

  return <DL.Wrapper>
    <DL.Header>
      <Logo />
    </DL.Header>
    <DL.Main>
      <DL.Navigation>
        <NavBar />
      </DL.Navigation>
      <DL.FeatureContent>{props.children}</DL.FeatureContent>
      <DL.Aside>
        <SessionController
          name="Daniel Bonifacio"
          description="editor há 2 anos"
          onLogout={() => {
            confirm({
              title: "Voce quer deslogar",
              onConfirm: () => {
                info({
                  title: "Voce foi deslogado",
                  description: "Você será redirecionado para a página de login"
                })
              }
            })
          }}
        />
      </DL.Aside>
    </DL.Main>
  </DL.Wrapper>
}

export default DefaultLayout