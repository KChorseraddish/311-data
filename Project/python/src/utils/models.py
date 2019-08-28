from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from sqlalchemy import create_engine

Base = declarative_base()
class ServiceRequest(Base):
     __tablename__ = 'service_requests'
     id = Column(Integer, primary_key=True, autoincrement=True)
     SRNumber = Column(String, nullable=True)
     CreatedDate = Column(String, nullable=True)#DateTime
     UpdatedDate = Column(String, nullable=True)#DateTime
     ActionTaken = Column(String, nullable=True)
     Owner = Column(String, nullable=True)
     RequestType = Column(String, nullable=True)
     Status = Column(String, nullable=True)
     RequestSource = Column(String, nullable=True)
     MobileOS = Column(String, nullable=True)
     Anonymous = Column(String, nullable=True)
     AssignTo = Column(String, nullable=True)
     ServiceDate = Column(String, nullable=True)#DateTime
     ClosedDate = Column(String, nullable=True)#DateTime
     AddressVerified = Column(String, nullable=True)
     ApproximateAddress = Column(String, nullable=True)
     Address = Column(String, nullable=True)
     HouseNumber = Column(String, nullable=True)
     Direction = Column(String, nullable=True)
     StreetName = Column(String, nullable=True)
     Suffix = Column(String, nullable=True)
     ZipCode = Column(String, nullable=True)
     Lattitude = Column(String, nullable=True)#Float
     Longitude = Column(String, nullable=True)#Float
     Location = Column(String, nullable=True)
     TBMPage = Column(String, nullable=True)
     TBMColumn = Column(String, nullable=True)
     TBMRow = Column(String, nullable=True)
     APC = Column(String, nullable=True)
     CD = Column(String, nullable=True)
     CDMember = Column(String, nullable=True)
     NC = Column(String, nullable=True)
     NCName = Column(String, nullable=True)
     PolicePrecinct = Column(String, nullable=True)


     def __repr__(self):
        return "<ServiceRequest(SRNumber='%s', CreatedDate='%s', \
        UpdatedDate='%s', ActionTaken='%s', Owner='%s', RequestType='%s',\
        Status='%s', RequestSource='%s', MobileOS='%s', Anonymous='%s',\
        AssignTo='%s', ServiceDate='%s', ClosedDate='%s',\
        AddressVerified='%s', ApproximateAddress='%s', Address='%s',\
        HouseNumber='%s', Direction='%s', StreetName='%s',\
        Suffix='%s', ZipCode='%s', Lattitude='%s',\
        Longitude='%s', Location='%s', TBMPage='%s',\
        TBMColumn='%s', TBMRow='%s', APC='%s', CD='%s', CDMember='%s', NC='%s',\
        NCName='%s', PolicePrecinct='%s',)>" % (self.name, self.fullname, self.nickname)
