<template lang="pug">
div
  #contact-me-success.success-msg(v-if='sent')
    i.fa.fa-check
    |         Your message was sent Successfully. Kelly will respond at his earliest convenience.
  form.pure-form.pure-form-stacked.contact-me(@submit='sendEmailEventHandler' v-else='')
    fieldset
      .pure-control-group
        label(for='subject')
          | Subject
        input#subject(name='subject' type='text' placeholder='Message title' v-model='email.subject')
      .pure-control-group
        label(for='email')
          | Email
        input#email(name='email' type='email' placeholder='Email' v-model='email.from')
      .pure-control-group
        label(for='message')
          | Message
        textarea#message.pure-input-1-2(name='message' placeholder='Message to Kelly' v-model='email.body')
      .pure-control-group
        button.pure-button.pure-button-primary(type='submit')
          | Send

</template>

<script lang="coffee">
export default
    name: 'contact-me'
    inject: ['setTitle']
    data: ->
        sent: false
        email:
            subject: ""
            from: ""
            body: ""
    methods:
        resetEmail: (event) ->
            console.log('Events work!',event)
        sendEmailEventHandler: (event) ->
            console.log("The email will be sent.",event)
            @$http.post('https://us-central1-kellyferrone-211016.cloudfunctions.net/sendgridEmail',@email).then(
                (response) => 
                    console.log("Yay the email sent!",response)
                    @sent = true
                    @email = 
                        subject: ""
                        from: ""
                        body: ""
            ).catch(
                (e) => console.log("Uh oh the email did not send!",e)
            )
            event.preventDefault()
    created: ->
        @setTitle('Contact Me')
</script>

<style lang="sass">
.contact-me
    textarea
        width: 100%
.success-msg 
    margin: 10px 0
    padding: 10px
    border-radius: 3px 3px 3px 3px
    color: #270
    background-color: #DFF2BF
</style>
