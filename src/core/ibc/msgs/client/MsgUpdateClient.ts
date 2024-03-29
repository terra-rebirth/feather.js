import { JSONSerializable } from '../../../../util/json';
import { AccAddress } from '../../../bech32';
import { Any } from '@terra-money/terra.proto/google/protobuf/any';
import { MsgUpdateClient as MsgUpdateClient_pb } from '@terra-money/terra.proto/ibc/core/client/v1/tx';
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header
 */
export class MsgUpdateClient extends JSONSerializable<
  any,
  MsgUpdateClient.Data,
  MsgUpdateClient.Proto
> {
  /**
   * @param client_id client unique identifier
   * @param header header to update the light client
   * @param signer signer address
   */
  constructor(
    public client_id: string,
    public clientMessage: Any | undefined,
    public signer: string
  ) {
    super();
  }

  public static fromAmino(_: any, isClassic?: boolean): MsgUpdateClient {
    _;
    isClassic;
    throw new Error('Amino not supported');
  }

  public toAmino(): any {
    throw new Error('Amino not supported');
  }

  public static fromData(
    data: MsgUpdateClient.Data,
    _?: boolean
  ): MsgUpdateClient {
    _;
    const { client_id, clientMessage, signer } = data;
    return new MsgUpdateClient(client_id, clientMessage, signer);
  }

  public toData(_?: boolean): MsgUpdateClient.Data {
    _;
    const { client_id, clientMessage, signer } = this;
    return {
      '@type': '/ibc.core.client.v1.MsgUpdateClient',
      client_id,
      clientMessage,
      signer,
    };
  }

  public static fromProto(
    proto: MsgUpdateClient.Proto,
    _?: boolean
  ): MsgUpdateClient {
    _;
    return new MsgUpdateClient(
      proto.clientId,
      proto.clientMessage,
      proto.signer
    );
  }

  public toProto(_?: boolean): MsgUpdateClient.Proto {
    _;
    const { client_id, clientMessage, signer } = this;
    return MsgUpdateClient_pb.fromPartial({
      clientId: client_id,
      clientMessage: clientMessage,
      signer,
    });
  }

  public packAny(_?: boolean): Any {
    _;
    return Any.fromPartial({
      typeUrl: '/ibc.core.client.v1.MsgUpdateClient',
      value: MsgUpdateClient_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any, _?: boolean): MsgUpdateClient {
    _;
    return MsgUpdateClient.fromProto(MsgUpdateClient_pb.decode(msgAny.value));
  }
}

export namespace MsgUpdateClient {
  export interface Data {
    '@type': '/ibc.core.client.v1.MsgUpdateClient';
    client_id: string;
    clientMessage?: Any;
    signer: AccAddress;
  }
  export type Proto = MsgUpdateClient_pb;
}
