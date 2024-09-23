import json

def lambda_handler(event, context):
    # Process the transaction or any action
    return {
        'statusCode': 200,
        'body': json.dumps('Transaction handled successfully!')
    }
