import { Flex, Card, Anchor, P, Hr, Grid } from '@dnb/eufemia'
import { Form, Field, Iterate, Value } from '@dnb/eufemia/extensions/forms'
import { useData, Visibility } from '@dnb/eufemia/extensions/forms/Form'

export default function App() {
  return (
    <Form.Handler
      id="aid"
      data={{
        beneficialOwners: {
          hasOtherBeneficialOwners: true,
          otherBeneficialOwners: [],
          hasOtherBeneficialOwners2: true,
          otherBeneficialOwners2: [],
        },
      }}
    >
      <Flex.Stack>
        <Form.Card>
          <UsingUpdate />
          {/* <UsingRemove /> */}
        </Form.Card>

        <Form.SubmitButton />
      </Flex.Stack>
    </Form.Handler>
  )
}

function UsingUpdate() {
  const { update, remove, data } = Form.useData('aid')

  console.log(
    'update data value:',
    data.beneficialOwners.hasOtherBeneficialOwners2
  )

  return (
    <Flex.Stack>
      <Form.Card>
        <Field.Boolean
          variant="buttons"
          path="/beneficialOwners/hasOtherBeneficialOwners2"
          onChange={(val) => {
            console.log('update onChange value:', val)
            if (!val) {
              //update('/beneficialOwners/otherBeneficialOwners2', [])
              setTimeout(() => {
                // update('/beneficialOwners/otherBeneficialOwners2', [])
                remove('/beneficialOwners/otherBeneficialOwners2')
              }, 1)
            }
          }}
          label="Er det flere?"
        />

        <Form.Visibility
          animate
          pathTrue="/beneficialOwners/hasOtherBeneficialOwners2"
        >
          <Field.ArraySelection path="/beneficialOwners/otherBeneficialOwners2">
            <Field.Option label="Name" value="name" />
            <Field.Option label="Name2" value="name2" />
          </Field.ArraySelection>
        </Form.Visibility>
      </Form.Card>
    </Flex.Stack>
  )
}

function UsingRemove() {
  const { remove, data } = Form.useData('aid')

  console.log(
    'remove data value:',
    data.beneficialOwners.hasOtherBeneficialOwners
  )

  return (
    <Flex.Stack>
      <Form.Card>
        <Field.Boolean
          variant="buttons"
          path="/beneficialOwners/hasOtherBeneficialOwners"
          onChange={(val) => {
            console.log('remove onChange value:', val)
            if (!val) {
              remove('/beneficialOwners/otherBeneficialOwners')
            }
          }}
          label="Er det flere?"
        />
        <Form.Visibility pathTrue="/beneficialOwners/hasOtherBeneficialOwners">
          <Field.ArraySelection path="/beneficialOwners/otherBeneficialOwners">
            <Field.Option label="Name" value="name" />
          </Field.ArraySelection>
        </Form.Visibility>
      </Form.Card>
    </Flex.Stack>
  )
}
