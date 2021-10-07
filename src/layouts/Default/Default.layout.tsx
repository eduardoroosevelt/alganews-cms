import React from "react";
import Logo from "../../app/components/Logo";
import NavBar from "../../app/components/NavBar";
import SessionController from "../../app/components/SessionController";
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
        />
      </DL.Aside>
    </DL.Main>
  </DL.Wrapper>
}

export default DefaultLayout