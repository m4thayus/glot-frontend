import React from "react"
import { Header, Statistic, Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProgressView from "./progress-view";

const textStatusToNum = string => {
    switch (string) {
        case 'complete':
            return 3       
        case 'pending':
            return 2            
        default:
            return 1
    }
}

const translationStatusToNum = string => {
    switch (string) {
        case 'complete':
            return 3       
        case 'pending':
            return 2            
        default:
            return 1
    }
}

function DashboardView(props){
    let { user } = props
    let approved_translations = user.translations.filter(translation => translation.status === 'complete')
    let total_pay = approved_translations.reduce(((sum ,translation) => sum + translation.text.pay), 0 )
    let pending_translations = user.translations.filter(translation => translation.status === 'pending')
    let num_known_langs = user.languages.length

    let stats = [
        {key: 'langs', label: 'Known Languages', value: num_known_langs},
        {key: 'pending', label: 'Pending Translations', value: pending_translations.length},
        {key: 'approved', label: 'Approved Translations', value: approved_translations.length},
        {key: 'pay', label: 'Total Earned', value: `$${total_pay}`}
    ]

    // let faqs =[
    //     {
    //         key: 'what-is-dog',
    //         title: 'What is a dog?',
    //         content: [
    //             'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
    //             'guest in many households across the world.',
    //             ].join(' '),
    //     },
    //     {
    //         key: 'kinds-of-dogs',
    //         title: 'What kinds of dogs are there?',
    //         content: [
    //             'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
    //             'that they find to be compatible with their own lifestyle and desires from a companion.',
    //             ].join(' '),
    //     },
    //     {
    //         key: 'acquire-dog',
    //         title: 'How do you acquire a dog?',
    //         content: {
    //             content: (
    //                 <div>
    //                 <p>
    //                 Three common ways for a prospective owner to acquire a dog is from
    //                 pet shops, private owners, or shelters.
    //                 </p>
    //                 <p>
    //                 A pet shop may be the most convenient way to buy a dog. Buying a dog
    //                 from a private owner allows you to assess the pedigree and
    //                 upbringing of your dog before choosing to take it home. Lastly,
    //                 finding your dog from a shelter, helps give a good home to a dog who
    //                 may not find one so readily.
    //                 </p>
    //                 </div>
    //             ),
    //         },
    //     },
    // ]

    let textsProgress = user.texts.map(text => (
        <ProgressView key={text.id} item={text} total={5} statusToNum={textStatusToNum} />
    ))

    let translationsProgress = user.translations.map(translation => (
        <ProgressView key={translation.id} item={translation} total={5} statusToNum={translationStatusToNum} />
    ))

    let requestTranslation = (
        <Button
            primary
            animated="fade"
            as={Link}
            to='/texts/new'>
                <Button.Content visible>You Haven't Requested Any Yet!</Button.Content>
                <Button.Content hidden>Request One</Button.Content>
        </Button>
    )

    let writeTranslation = (
        <Button
            primary
            animated="fade"
            as={Link}
            to='/texts'>
                <Button.Content visible>You Haven't Written Any Yet!</Button.Content>
                <Button.Content hidden>Find A Text To Translate</Button.Content>
        </Button>
    )

    return (
        <Segment.Group raised>
            <Segment>
                <Header size="large">Welcome, {user.firstName} {user.lastName}</Header>
                <Statistic.Group items={stats} widths="4" />
            </Segment>
            <Segment>
                <Header>Your Translation Requests</Header>
                <Segment textAlign='center' basic>
                    {user.texts.length === 0 ? requestTranslation : textsProgress}
                </Segment>
            </Segment>
            <Segment>
                <Header>Your Submitted Translations</Header>
                <Segment textAlign='center' basic>
                    {user.translations.length === 0 ? writeTranslation : translationsProgress}
                </Segment>
            </Segment>
            {/* <Segment>
                <Header>FAQs</Header>
                <Accordion defaultActiveIndex={0} panels={faqs} />
            </Segment> */}
        </Segment.Group>
    )
}

export default DashboardView