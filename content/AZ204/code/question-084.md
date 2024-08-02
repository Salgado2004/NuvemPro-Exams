<policies>
    <inbound>
        <base />
        <(1) ____________ vary-by-developer="false" vary-by-developer-groups="false" 
                          downstream-caching-type="none" must-revalidate="true" caching-type="internal> 
    </inbound>
    <backend>
        <base />
    </backend>
    <outbound>
        <(2) ___________ duration="60">
        <base />
    </outbound>
    <on-error>
        <base />
    </on-error>
</policies>